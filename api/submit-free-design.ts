import type { VercelRequest, VercelResponse } from '@vercel/node';
import { normalizeResendFrom } from './_lib/resendFrom.js';

type FreeDesignBody = {
  businessName?: string;
  hasWebsite?: string;
  websiteUrl?: string;
  socialUrl?: string;
  competitors?: string;
  designStyles?: string;
  additionalNotes?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

function formatLeadSummary(data: Required<FreeDesignBody>): string {
  return [
    'LocalLift — Free Website Design Request',
    '========================================',
    '',
    `Business: ${data.businessName}`,
    `Has website: ${data.hasWebsite}`,
    `Website URL: ${data.websiteUrl || '—'}`,
    `Social / profile: ${data.socialUrl || '—'}`,
    `Inspiration / competitors: ${data.competitors || '—'}`,
    `Design styles: ${data.designStyles || '—'}`,
    `Additional notes: ${data.additionalNotes || '—'}`,
    '',
    'Contact',
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || '—'}`,
  ].join('\n');
}

/** Accepts full URLs or bare domains; empty string fails. */
function looksLikeHttpUrl(value: string): boolean {
  const t = value.trim();
  if (!t) return false;
  try {
    const u = new URL(t.includes('://') ? t : `https://${t}`);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

/** Same pattern as api/submit-plan.ts — creates one board item with email + long text. */
async function createMondayItem(submitterEmail: string, itemName: string, leadData: string): Promise<void> {
  const apiToken = process.env.MONDAY_API_TOKEN;
  const boardId = process.env.MONDAY_BOARD_ID;
  const groupId = process.env.MONDAY_GROUP_ID ?? 'topics';
  const emailColumnId = process.env.MONDAY_COLUMN_EMAIL;
  const leadDataColumnId = process.env.MONDAY_COLUMN_LEAD_DATA;

  if (!apiToken || !boardId || !emailColumnId || !leadDataColumnId) return;

  try {
    const columnValues: Record<string, string> = {
      [emailColumnId]: submitterEmail,
      [leadDataColumnId]: leadData,
    };

    const query = `
      mutation CreateItem($boardId: ID!, $groupId: String!, $itemName: String!, $columnValues: JSON!) {
        create_item(board_id: $boardId, group_id: $groupId, item_name: $itemName, column_values: $columnValues) {
          id
        }
      }
    `;

    const res = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        Authorization: apiToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          boardId,
          groupId,
          itemName,
          columnValues: JSON.stringify(columnValues),
        },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Monday create item error (free-design):', res.status, err);
      return;
    }

    const json = (await res.json()) as { errors?: { message: string }[] };
    if (json.errors?.length) {
      console.error('Monday API errors (free-design):', json.errors);
    }
  } catch (err) {
    console.error('Monday error (free-design):', err);
  }
}

/** Admin notification via Resend (quiz plan delivery still uses EmailJS). */
async function sendAdminEmailViaResend(payload: {
  businessName: string;
  submitterEmail: string;
  leadSummary: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromRaw = process.env.RESEND_FROM;
  const from = normalizeResendFrom(fromRaw);
  const toRaw = process.env.LOCALIFT_NOTIFY_EMAIL;

  if (fromRaw && !from) {
    console.warn(
      'LocalLift Resend: RESEND_FROM is invalid. Use `you@domain.com` or `Name <you@domain.com>` (no stray quotes or line breaks).',
    );
  }
  if (!apiKey || !from || !toRaw) {
    return;
  }

  const to = toRaw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  if (to.length === 0) return;

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      subject: `LocalLift design request — ${payload.businessName}`,
      text: payload.leadSummary,
      replyTo: payload.submitterEmail,
    });
    if (result.error) {
      console.error('Resend LocalLift notify error:', result.error);
    }
  } catch (err) {
    console.error('Resend LocalLift notify error:', err);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const raw = req.body;
  const body = (
    typeof raw === 'object' && raw !== null && !Array.isArray(raw)
      ? raw
      : JSON.parse(typeof raw === 'string' ? raw : '{}')
  ) as FreeDesignBody;

  const businessName = typeof body.businessName === 'string' ? body.businessName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : '';
  const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : '';

  if (!businessName || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !firstName || !lastName) {
    return res.status(400).json({ error: 'Missing or invalid required fields' });
  }

  const hasWebsiteRaw = typeof body.hasWebsite === 'string' ? body.hasWebsite.trim() : '';
  const websiteUrl = typeof body.websiteUrl === 'string' ? body.websiteUrl.trim() : '';
  const socialUrl = typeof body.socialUrl === 'string' ? body.socialUrl.trim() : '';

  if (hasWebsiteRaw !== 'yes' && hasWebsiteRaw !== 'no') {
    return res.status(400).json({ error: 'Please indicate whether you have a website' });
  }
  if (hasWebsiteRaw === 'yes' && !looksLikeHttpUrl(websiteUrl)) {
    return res.status(400).json({ error: 'Please enter a valid website URL' });
  }
  if (hasWebsiteRaw === 'no' && !looksLikeHttpUrl(socialUrl)) {
    return res.status(400).json({ error: 'Please enter a link to your Facebook page, Google listing, or other profile' });
  }

  const data: Required<FreeDesignBody> = {
    businessName,
    hasWebsite: hasWebsiteRaw,
    websiteUrl,
    socialUrl,
    competitors: typeof body.competitors === 'string' ? body.competitors.trim() : '',
    designStyles: typeof body.designStyles === 'string' ? body.designStyles.trim() : '',
    additionalNotes: typeof body.additionalNotes === 'string' ? body.additionalNotes.trim() : '',
    firstName,
    lastName,
    email,
    phone: typeof body.phone === 'string' ? body.phone.trim() : '',
  };

  const leadSummary = formatLeadSummary(data);
  const itemName = `LocalLift Design — ${businessName}`;

  await createMondayItem(email, itemName, leadSummary);
  await sendAdminEmailViaResend({
    businessName,
    submitterEmail: email,
    leadSummary,
  });

  return res.status(200).json({ ok: true });
}
