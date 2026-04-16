import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  getPlanTemplate,
  getTemplateEStepOrder,
  mapToTemplateVariables,
  calculateScores,
  type PlanScores,
} from './_lib/planRouting';
import { getTemplateConfig, getPrompt } from './_lib/templateConfig';
import { generateAiInsert } from './_lib/claude';

/** Build a concise "what we recommended" summary for Monday (under 2,000 chars) */
function formatPlanSummary(planData: {
  tagline: string;
  scores: PlanScores;
  steps: { title: string }[];
  sixtyDayTarget: string;
}): string {
  const { tagline, scores, steps, sixtyDayTarget } = planData;
  const scoresLine = `Respond: ${scores.respond} | Follow Up: ${scores.followUp} | Show Up: ${scores.showUp} | Ask: ${scores.ask} | Total: ${scores.total}/40`;
  const stepList = steps.map((s, i) => `${i + 1}. ${s.title}`).join('\n');
  return `Plan: ${tagline}\n\nScores: ${scoresLine}\n\nSteps recommended:\n${stepList}\n\n60-day target: ${sixtyDayTarget}`;
}

/** Create Monday.com board item */
async function createMondayItem(
  email: string,
  planData: {
    tagline: string;
    scores: PlanScores;
    steps: { title: string }[];
    sixtyDayTarget: string;
  }
): Promise<void> {
  const apiToken = process.env.MONDAY_API_TOKEN;
  const boardId = process.env.MONDAY_BOARD_ID;
  const groupId = process.env.MONDAY_GROUP_ID ?? 'topics';
  const emailColumnId = process.env.MONDAY_COLUMN_EMAIL;
  const leadDataColumnId = process.env.MONDAY_COLUMN_LEAD_DATA;

  if (!apiToken || !boardId || !emailColumnId || !leadDataColumnId) return;

  try {
    const leadData = formatPlanSummary(planData);

    // Text and long_text columns accept plain strings in create_item
    const columnValues: Record<string, string> = {
      [emailColumnId]: email,
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
          itemName: `Custom Plan - ${email}`,
          columnValues: JSON.stringify(columnValues),
        },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Monday create item error:', res.status, err);
      return;
    }

    const json = (await res.json()) as { errors?: { message: string }[]; data?: { create_item: { id: string } } };
    if (json.errors?.length) {
      console.error('Monday API errors:', json.errors);
    }
  } catch (err) {
    console.error('Monday error:', err);
  }
}

/** Generate plain-text plan for email (avoids Gmail/EmailJS HTML rendering issues) */
function planToText(planData: {
  tagline: string;
  headline: string;
  subline: string;
  scores: PlanScores;
  steps: { title: string; subtitle: string; fixedCopy: string; aiInsert: string }[];
  sixtyDayTarget: string;
}): string {
  const { tagline, headline, subline, scores, steps, sixtyDayTarget } = planData;
  const scoreBlock = [
    `Respond: ${scores.respond}/10`,
    `Follow Up: ${scores.followUp}/10`,
    `Show Up: ${scores.showUp}/10`,
    `Ask: ${scores.ask}/10`,
    `Total: ${scores.total}/40`,
  ].join('\n');
  const stepBlocks = steps
    .map(
      (s) =>
        `${s.title}\n${s.subtitle}\n\n${s.fixedCopy}\n\n"${s.aiInsert}"\n`
    )
    .join('\n---\n\n');
  return `${tagline}
${headline}

${subline}

YOUR BOOKED & BUSY SCORES
${scoreBlock}

YOUR PLAN

${stepBlocks}
60-DAY TARGET
${sixtyDayTarget}

Ready to put this in place? Schedule a call: https://zcal.co/adriamooney/15min`;
}

/** Send plan email via EmailJS server-side */
async function sendPlanEmail(
  email: string,
  planData: { tagline: string; headline: string; subline: string; scores: PlanScores; steps: { title: string; subtitle: string; fixedCopy: string; aiInsert: string }[]; sixtyDayTarget: string },
  templateType: string
): Promise<void> {
  const serviceId = process.env.EMAILJS_QUIZ_SERVICE_ID;
  const templateId = process.env.EMAILJS_QUIZ_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_QUIZ_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_QUIZ_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) return;

  try {
    const { send } = await import('@emailjs/nodejs');
    await send(serviceId, templateId, {
      to_email: email,
      plan_content: planToText(planData),
      plan_type: templateType,
    }, {
      publicKey,
      privateKey,
    });
  } catch (err) {
    console.error('EmailJS plan email error:', err);
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

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error: missing Anthropic API key' });
  }

  try {
    const body = req.body as { email?: string; answers?: Record<string, string>; anythingElse?: string };
    const { email, answers = {}, anythingElse = '' } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    const q10 = answers['q10'] ?? '';
    const q11 = answers['q11'] ?? '';
    const template = getPlanTemplate(q10, q11);
    const scores = calculateScores(answers);
    const vars = mapToTemplateVariables(answers, anythingElse);

    let configSteps = getTemplateConfig(template).steps;

    if (template === 'fullsystem') {
      const order = getTemplateEStepOrder(q11);
      configSteps = order.map((i) => configSteps[i]);
    }

    const steps: { title: string; subtitle: string; fixedCopy: string; aiInsert: string }[] = [];
    for (const step of configSteps) {
      const prompt = getPrompt(step.promptTemplate, vars);
      const aiInsert = await generateAiInsert(prompt, apiKey);
      steps.push({
        title: step.title,
        subtitle: step.subtitle,
        fixedCopy: step.fixedCopy,
        aiInsert,
      });
    }

    const config = getTemplateConfig(template);
    const planData = {
      template,
      email,
      tagline: config.tagline,
      headline: config.headline,
      subline: config.subline,
      scores,
      steps,
      sixtyDayTarget: config.sixtyDayTarget,
    };

    await createMondayItem(email, {
      tagline: config.tagline,
      scores,
      steps,
      sixtyDayTarget: config.sixtyDayTarget,
    });

    await sendPlanEmail(
      email,
      planData,
      config.tagline
    );

    return res.status(200).json(planData);
  } catch (err) {
    console.error('submit-plan error:', err);
    return res
      .status(500)
      .json({ error: err instanceof Error ? err.message : 'Failed to generate plan' });
  }
}
