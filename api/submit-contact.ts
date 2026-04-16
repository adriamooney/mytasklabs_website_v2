import type { VercelRequest, VercelResponse } from '@vercel/node';
import { normalizeResendFrom } from './_lib/resendFrom';

type ContactBody = {
  businessName?: string;
  email?: string;
  phone?: string;
  message?: string;
  smsOptIn?: boolean;
};

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
  ) as ContactBody;

  const businessName = typeof body.businessName === 'string' ? body.businessName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const smsOptIn = body.smsOptIn === true;

  if (!businessName || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return res.status(400).json({ error: 'Missing or invalid required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromRaw = process.env.RESEND_FROM;
  const from = normalizeResendFrom(fromRaw);
  const toRaw = process.env.CONTACT_NOTIFY_EMAIL;

  if (fromRaw && !from) {
    console.warn(
      'Contact Resend: RESEND_FROM is invalid. Use `you@domain.com` or `Name <you@domain.com>` (no stray quotes or line breaks).',
    );
  }
  if (!apiKey || !from || !toRaw) {
    return res.status(503).json({ error: 'Contact service is not configured.' });
  }

  const to = toRaw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  if (to.length === 0) {
    return res.status(503).json({ error: 'Contact service is not configured.' });
  }

  const text = [
    'Contact form — My Task Labs',
    '',
    `Business: ${businessName}`,
    `Email: ${email}`,
    `Phone: ${phone || '—'}`,
    `SMS opt-in: ${smsOptIn ? 'Yes' : 'No'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      subject: `Website contact — ${businessName}`,
      text,
      replyTo: email,
    });
    if (result.error) {
      console.error('Resend contact error:', result.error);
      return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
  } catch (err) {
    console.error('Resend contact error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }

  return res.status(200).json({ ok: true });
}
