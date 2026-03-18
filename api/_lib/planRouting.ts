/**
 * Plan routing, scoring, and variable mapping from plan-routing.md
 */

export type PlanTemplate = 'respond' | 'followup' | 'showup' | 'ask' | 'fullsystem';

export interface PlanScores {
  respond: number;
  followUp: number;
  showUp: number;
  ask: number;
  total: number;
}

export interface TemplateVariables {
  trucks: string;
  business_age: string;
  weekly_volume: string;
  lead_source: string;
  lead_notification: string;
  after_hours: string;
  software: string;
  calendar: string;
  automations: string;
  gap: string;
  win: string;
  open_text: string;
}

/** Q10 answer → template */
const Q10_TO_TEMPLATE: Record<string, PlanTemplate> = {
  "I'm too slow responding to new leads": 'respond',
  'Leads go cold and I never follow up': 'followup',
  'Jobs get no-showed or forgotten': 'showup',
  "I never get reviews even when the job goes great": 'ask',
  'All of the above honestly': 'fullsystem',
};

/** Q11 → Template E step order (Respond=0, FollowUp=1, ShowUp=2, Ask=3) */
const Q11_STEP_ORDER: Record<string, number[]> = {
  'A fuller schedule with fewer gaps': [0, 1, 2, 3], // Respond, Follow Up, Show Up, Ask
  'More five-star reviews on Google': [3, 0, 1, 2], // Ask first
  'Spending less time on my phone chasing people': [0, 2, 1, 3], // Respond, Show Up, Follow Up, Ask
  "Knowing leads aren't slipping through the cracks": [1, 0, 2, 3], // Follow Up first
  'All of the above': [0, 1, 2, 3],
};

export function getPlanTemplate(q10: string, q11: string): PlanTemplate {
  const template = Q10_TO_TEMPLATE[q10];
  if (!template) return 'fullsystem';
  return template;
}

export function getTemplateEStepOrder(q11: string): number[] {
  return Q11_STEP_ORDER[q11] ?? [0, 1, 2, 3];
}

function getAnswer(answers: Record<string, string>, id: string): string {
  return answers[id] ?? '';
}

/** Map raw quiz answers to normalized template variables */
export function mapToTemplateVariables(answers: Record<string, string>, openText: string): TemplateVariables {
  const a = (id: string) => getAnswer(answers, id);

  const trucksMap: Record<string, string> = {
    'Just me (owner-operator, no crew)': 'just me',
    '1 truck with a helper': '1 truck with a helper',
    '2–3 trucks': '2–3 trucks',
    '4+ trucks': '4+ trucks',
  };
  const businessAgeMap: Record<string, string> = {
    'Less than 1 year': 'less than 1 year',
    '1–3 years': '1–3 years',
    '3+ years': '3+ years',
  };
  const weeklyVolumeMap: Record<string, string> = {
    '1–5 jobs': '1–5 jobs',
    '6–15 jobs': '6–15 jobs',
    '16–30 jobs': '16–30 jobs',
    '30+ jobs': '30+ jobs',
  };
  const leadSourceMap: Record<string, string> = {
    'Google / search ads': 'Google / search ads',
    'Angi, Thumbtack, or similar lead platforms': 'Angi / Thumbtack',
    'Facebook / social media': 'Facebook / social media',
    'Word of mouth / referrals': 'word of mouth / referrals',
    'My own website': 'my own website',
  };
  const leadNotificationMap: Record<string, string> = {
    'A phone call comes in directly': 'phone call',
    'A text or email notification': 'text or email notification',
    'I check my apps manually': 'checks apps manually',
    'It depends — no consistent process': 'no consistent process',
  };
  const afterHoursMap: Record<string, string> = {
    'Same as any other lead — I get back to them when I can': 'responds when they can',
    'I try to respond quickly even after hours': 'tries to respond quickly',
    'They mostly wait until the next business day': 'waits until next day',
    "I don't get many leads outside business hours": 'few after-hours leads',
  };
  const softwareMap: Record<string, string> = {
    'Yes — Jobber': 'Jobber',
    'Yes — Housecall Pro': 'Housecall Pro',
    'Yes — ServiceTitan': 'ServiceTitan',
    'Yes — something else': 'other software',
    'No — I use spreadsheets or paper': 'spreadsheets or paper',
    'No — I just manage it myself': 'none',
  };
  const calendarMap: Record<string, string> = {
    'Jobber / Housecall Pro (built-in)': 'built-in (Jobber/HCP)',
    'Google Calendar': 'Google Calendar',
    'A whiteboard or paper schedule': 'whiteboard or paper',
    'I keep it in my head': 'in their head',
    'Something else': 'other',
  };
  const automationsMap: Record<string, string> = {
    'Yes, I have some automations set up': 'has automations',
    'I do it manually when I remember': 'does it manually',
    "No, I don't do this at all": "doesn't do it at all",
  };

  return {
    trucks: trucksMap[a('q1')] ?? a('q1'),
    business_age: businessAgeMap[a('q2')] ?? a('q2'),
    weekly_volume: weeklyVolumeMap[a('q3')] ?? a('q3'),
    lead_source: leadSourceMap[a('q4')] ?? a('q4'),
    lead_notification: leadNotificationMap[a('q5')] ?? a('q5'),
    after_hours: afterHoursMap[a('q6')] ?? a('q6'),
    software: softwareMap[a('q7')] ?? a('q7'),
    calendar: calendarMap[a('q8')] ?? a('q8'),
    automations: automationsMap[a('q9')] ?? a('q9'),
    gap: a('q10'),
    win: a('q11'),
    open_text: openText?.trim() ?? '',
  };
}

/** Calculate Booked & Busy scores from quiz answers */
export function calculateScores(answers: Record<string, string>): PlanScores {
  const a = (id: string) => getAnswer(answers, id);
  const q10 = a('q10');
  const q11 = a('q11');

  const q5Points: Record<string, number> = {
    'A phone call comes in directly': 6,
    'A text or email notification': 7,
    'I check my apps manually': 3,
    'It depends — no consistent process': 1,
  };
  const q6Points: Record<string, number> = {
    'Same as any other lead — I get back to them when I can': 2,
    'I try to respond quickly even after hours': 6,
    'They mostly wait until the next business day': 1,
    "I don't get many leads outside business hours": 7,
  };
  const q8Points: Record<string, number> = {
    'Jobber / Housecall Pro (built-in)': 7,
    'Google Calendar': 6,
    'A whiteboard or paper schedule': 3,
    'I keep it in my head': 1,
    'Something else': 5,
  };
  const q9AutomationPoints: Record<string, number> = {
    'Yes, I have some automations set up': 8,
    'I do it manually when I remember': 4,
    "No, I don't do this at all": 1,
  };
  const q9AskPoints: Record<string, number> = {
    'Yes, I have some automations set up': 8,
    'I do it manually when I remember': 3,
    "No, I don't do this at all": 1,
  };

  const respondScore = Math.round(
    ((q5Points[a('q5')] ?? 0) + (q6Points[a('q6')] ?? 0)) / 2
  );

  let followUpScore = q9AutomationPoints[a('q9')] ?? 0;
  if (q10 === 'Leads go cold and I never follow up' || q10 === 'All of the above honestly') {
    followUpScore = Math.min(followUpScore, 3);
  }

  let showUpScore = q8Points[a('q8')] ?? 0;
  if (q10 === 'Jobs get no-showed or forgotten' || q10 === 'All of the above honestly') {
    showUpScore = Math.min(showUpScore, 3);
  }

  let askScore = q9AskPoints[a('q9')] ?? 0;
  if (q10 === "I never get reviews even when the job goes great") {
    askScore = Math.min(askScore, 2);
  } else if (q10 === 'All of the above honestly') {
    askScore = Math.min(askScore, 3);
  }

  return {
    respond: respondScore,
    followUp: followUpScore,
    showUp: showUpScore,
    ask: askScore,
    total: respondScore + followUpScore + showUpScore + askScore,
  };
}
