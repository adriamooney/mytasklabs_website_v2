import type { TemplateVariables } from './planRouting.js';
import type { PlanTemplate } from './planRouting.js';

export interface PlanStep {
  title: string;
  subtitle: string;
  fixedCopy: string;
  promptTemplate: string;
}

export interface PlanTemplateConfig {
  tagline: string;
  headline: string;
  subline: string;
  steps: PlanStep[];
  sixtyDayTarget: string;
}

function subVars(template: string, v: TemplateVariables): string {
  return template
    .replace(/\{\{trucks\}\}/g, v.trucks)
    .replace(/\{\{business_age\}\}/g, v.business_age)
    .replace(/\{\{weekly_volume\}\}/g, v.weekly_volume)
    .replace(/\{\{lead_source\}\}/g, v.lead_source)
    .replace(/\{\{lead_notification\}\}/g, v.lead_notification)
    .replace(/\{\{after_hours\}\}/g, v.after_hours)
    .replace(/\{\{software\}\}/g, v.software)
    .replace(/\{\{calendar\}\}/g, v.calendar)
    .replace(/\{\{automations\}\}/g, v.automations)
    .replace(/\{\{open_text\}\}/g, v.open_text);
}

export function getPrompt(template: string, v: TemplateVariables): string {
  let prompt = subVars(template, v);
  if (v.open_text) {
    prompt += `\n\nThe user also added this in their own words: ${v.open_text}. Incorporate this if relevant.`;
  }
  return prompt;
}

const RESPOND_STEPS: PlanStep[] = [
  {
    title: 'Automatic SMS response within 60 seconds',
    subtitle: "Even when you're mid-job",
    fixedCopy:
      "When a new lead comes in — from your website, Google, Angi, or anywhere else — your system responds instantly by text. It asks a few short qualifying questions, delivers a quote, and if they're ready to book, confirms the appointment. All automatically, over SMS. This runs at 2pm on a Tuesday and at 11pm on a Saturday. You don't lose the job because you didn't know about it in time. Your business was already handling it.",
    promptTemplate:
      'The user runs a junk removal business with {{trucks}}, gets most leads from {{lead_source}}, and currently finds out about new leads via: {{lead_notification}}. Write 2 confident, direct sentences — no em dashes, no buzzwords — explaining specifically why instant SMS response matters for their situation. Be concrete and specific to their lead source and notification method. Do not use phrases like "it\'s not about X, it\'s about Y". Do not use the word "delve". Respond with only the 2 sentences.',
  },
  {
    title: 'After-hours coverage, fully automatic',
    subtitle: 'No more Monday morning surprises',
    fixedCopy:
      "Leads that come in evenings or weekends get the same instant response as any other. They're quoted, asked about their job, and given a booking option — right there in the text thread. By the time you check your phone in the morning, some of those conversations are already booked jobs on your calendar.",
    promptTemplate:
      'The user currently handles after-hours leads this way: {{after_hours}}. They get most leads from {{lead_source}}. Write 2 direct sentences about what this after-hours gap is costing them specifically, and what changes when it\'s handled automatically. Be concrete about the type of leads they\'re losing given their source. No fluff, no em dashes.',
  },
  {
    title: 'Full conversation handled, nothing falls through',
    subtitle: 'Qualify, quote, book — without you',
    fixedCopy:
      "The system handles the entire first conversation. It qualifies the lead, delivers an accurate quote based on what they describe, and books the appointment if they're ready. If they need a follow-up, that fires automatically too. You get notified when a job is booked — not every time someone inquires.",
    promptTemplate:
      'The user currently uses {{software}} for job management and {{calendar}} for scheduling. Their current automation level is: {{automations}}. Write 2 practical, direct sentences about how automatic lead handling connects to their existing setup — or what setting it up from scratch looks like given they have no software. Be specific and useful. No fluff.',
  },
];

const FOLLOWUP_STEPS: PlanStep[] = [
  {
    title: 'Automated two-touch follow-up sequence',
    subtitle: 'Fires without you thinking about it',
    fixedCopy:
      "Any lead that doesn't book within 24 hours automatically enters a follow-up sequence. Message one goes out at the 24-hour mark — casual, low pressure, keeps the door open. Message two goes out at day four — slightly more direct, creates a soft deadline. Both sent automatically over SMS. You don't have to remember. You don't have to check. It just runs.",
    promptTemplate:
      'The user gets most leads from {{lead_source}} and currently handles follow-up this way: {{automations}}. Write 2 direct sentences — no em dashes, no buzzwords — about why follow-up matters specifically for their lead source and what their current approach is costing them. Be concrete and specific to {{lead_source}}. Do not be generic.',
  },
  {
    title: 'One-time cold lead reactivation',
    subtitle: 'Money already in your lead history',
    fixedCopy:
      "Before the new system goes live, we'll help you send a single reactivation message to every lead from the last 90 days that never booked. Even a 10% response rate on that list converts to real revenue. This is typically the fastest win owners see — and it happens before any new setup is complete.",
    promptTemplate:
      'The user does approximately {{weekly_volume}} jobs per week and has been in business {{business_age}}. They have been generating leads from {{lead_source}}. Write 2 direct sentences about what a cold lead reactivation could realistically look like for a business their size and age — be grounded and specific, not hyped. Give them a realistic sense of what to expect.',
  },
  {
    title: 'Automatic booking when they\'re ready',
    subtitle: 'Close the loop without a phone call',
    fixedCopy:
      "When a follow-up converts, the system moves straight to quoting and booking — all over SMS. No handoff needed. The lead goes from cold to booked without you being involved in a single step of the conversation. You get a notification when the job is confirmed.",
    promptTemplate:
      'The user currently uses {{software}} for job management and {{calendar}} for scheduling. Their current automation level is: {{automations}}. Write 2 practical sentences about how automated follow-up and booking connects to their existing setup, or what getting started looks like if they have no software. Be specific and direct.',
  },
];

const SHOWUP_STEPS: PlanStep[] = [
  {
    title: 'Two-stage appointment confirmation',
    subtitle: 'Evening before and morning of, every time',
    fixedCopy:
      "Every booked job triggers two automatic SMS messages. One the evening before: a friendly reminder with the job details. One the morning of: a short confirmation prompt asking them to reply yes. If they don't confirm, you know before you load the truck, not when you arrive at an empty driveway.",
    promptTemplate:
      'The user currently uses {{software}} for job management and {{calendar}} for scheduling. Write 2 direct, practical sentences about how the two-stage confirmation system connects specifically to how they manage jobs today — whether that\'s integrating with their software or starting from scratch. Be specific to {{calendar}} and {{software}}. No fluff, no em dashes.',
  },
  {
    title: 'One-tap rescheduling built into every message',
    subtitle: 'Keep the job even when timing changes',
    fixedCopy:
      "Every confirmation message includes a rescheduling link. A customer who can't make it but can easily reschedule is far better than a no-show. This keeps jobs on the calendar and keeps the relationship intact — without any awkward back-and-forth on your end.",
    promptTemplate:
      'The user completes approximately {{weekly_volume}} jobs per week. Write 2 direct sentences about what no-shows cost a business at that volume — be specific and realistic about time, fuel, and lost revenue per week. Keep it grounded. No hype.',
  },
  {
    title: 'Automatic re-engagement when a job falls through',
    subtitle: 'Recover what would otherwise be lost',
    fixedCopy:
      'When a job doesn\'t happen, the system sends a short follow-up that reopens the conversation without any awkwardness on your part. Something direct: "Looks like we missed each other — want to find another time?" Recovers a meaningful share of what would otherwise be permanently lost revenue.',
    promptTemplate:
      'The user gets most leads from {{lead_source}} and currently has {{automations}} automations set up. Write 2 direct sentences about what having this no-show recovery step running automatically means for a business like theirs — given their lead source and how they currently operate. Be concrete.',
  },
];

const ASK_STEPS: PlanStep[] = [
  {
    title: 'Review request timed to the right moment',
    subtitle: '20–40 minutes after every completed job',
    fixedCopy:
      "The right moment to ask for a review is 20 to 40 minutes after the job wraps — when the customer is standing in their cleared space feeling good about the decision, before the feeling fades and life gets in the way. The system fires an automatic SMS with a direct Google review link at exactly that window, triggered when you mark the job complete.",
    promptTemplate:
      'The user completes approximately {{weekly_volume}} jobs per week and currently has {{automations}} automations. Write 2 direct sentences about what consistent review requests at this job volume could realistically build over 60 days — be specific about the compounding effect. Keep it grounded and concrete, not hyped.',
  },
  {
    title: 'Direct Google link, zero friction',
    subtitle: 'Remove every barrier between the customer and the review',
    fixedCopy:
      "The message includes a direct link to your Google review page. No searching, no hunting for your business name. Friction is the enemy of reviews — customers who have to find you themselves rarely bother. One tap and they're writing the review.",
    promptTemplate:
      'The user gets most leads from {{lead_source}}. Write 2 direct sentences about why Google review volume matters specifically for that lead source — how reviews directly affect their visibility and inbound lead quality for {{lead_source}}. Be specific to the channel, not generic.',
  },
  {
    title: 'Referral ask built into the same sequence',
    subtitle: 'Turn one happy customer into two',
    fixedCopy:
      "Two days after the review request, a short follow-up message thanks them and asks if they know anyone who might need the same help. A customer who just left a five-star review is the warmest possible audience for a referral ask. This is where word-of-mouth stops being luck and starts being a system.",
    promptTemplate:
      'The user currently uses {{software}} for job management and {{calendar}} for scheduling. Write 2 practical sentences about how the review and referral sequence connects to how they currently track completed jobs — whether that\'s integrating with their software or a simple manual trigger. Be specific.',
  },
];

const FULL_SYSTEM_STEPS: PlanStep[] = [
  {
    title: "Respond: Quote and book automatically while you're on the job",
    subtitle: 'The foundation everything else sits on',
    fixedCopy:
      "Instant SMS response goes in first. When a lead comes in — any time, any day — the system responds within 60 seconds, asks qualifying questions, delivers a quote, and books the job if they're ready. This runs at 2pm on a Tuesday and at 11pm on Saturday. Nothing else matters if leads are dying before they enter your process. This is where the biggest and fastest improvement shows up on your calendar.",
    promptTemplate:
      'The user runs {{trucks}}, completes {{weekly_volume}} jobs per week, gets leads from {{lead_source}}, and currently finds out about new leads via: {{lead_notification}}. They handle after-hours leads this way: {{after_hours}}. Write 2 direct sentences about what fixing response speed specifically means for a business like theirs — be concrete about their lead source and after-hours situation. No fluff, no em dashes.',
  },
  {
    title: 'Follow Up: Recover leads that went quiet',
    subtitle: 'Revenue already in your pipeline',
    fixedCopy:
      "Once leads are getting a fast first response, some still won't book immediately. A two-message follow-up sequence captures the ones who needed a second touch — sent automatically at 24 hours and day four. Before the system goes live, we'll also run a one-time reactivation of your last 90 days of cold leads. That's typically the fastest visible win.",
    promptTemplate:
      'The user has been in business {{business_age}} and currently uses {{software}} for job management. Their current automation level is: {{automations}}. Write 2 direct sentences about what a cold lead reactivation could realistically mean for a business their size and age, and how the ongoing follow-up sequence connects to their current setup. Be specific and grounded.',
  },
  {
    title: 'Show Up: Protect the jobs already on your calendar',
    subtitle: "Stop losing work you already won",
    fixedCopy:
      "With leads converting at a higher rate, protecting those bookings becomes the priority. An automatic confirmation goes out the evening before and the morning of every job — with a one-tap rescheduling option if they can't make it. When a job still falls through, a re-engagement message fires automatically within 30 minutes.",
    promptTemplate:
      'The user currently uses {{calendar}} for scheduling. Write 2 direct, practical sentences about how the confirmation system connects to how they manage their calendar today — either integrating with existing tools or what a simple setup looks like from scratch. Be specific to {{calendar}}.',
  },
  {
    title: 'Ask: Turn completed jobs into reviews and referrals',
    subtitle: 'The stage that starts compounding',
    fixedCopy:
      "Once the front end of the process is clean, every completed job becomes an asset. A review request fires 20 to 40 minutes after the job wraps — when the customer is still in the moment. Two days later, a short referral ask goes out. Better reviews bring in better leads that now enter a system built to convert them. That's the flywheel.",
    promptTemplate:
      'The user gets most leads from {{lead_source}} and completes {{weekly_volume}} jobs per week. Write 2 direct sentences about what a functioning review and referral system means for their specific lead source at their job volume — how it compounds over 60 days. Be concrete, not generic.',
  },
];

const TEMPLATE_CONFIGS: Record<PlanTemplate, PlanTemplateConfig> = {
  respond: {
    tagline: 'Your Respond Plan',
    headline: 'Your plan is built around one thing: being first.',
    subline:
      "Your biggest opportunity right now is response speed — and the good news is you don't have to be at your phone to win it.",
    steps: RESPOND_STEPS,
    sixtyDayTarget:
      'Response time under 90 seconds on 90% of leads. After-hours leads converting at the same rate as business-hours leads.',
  },
  followup: {
    tagline: 'Your Follow Up Plan',
    headline: "Your plan is built around one thing: the leads you've already paid for.",
    subline:
      "Those leads that went quiet didn't say no. They got busy, got distracted, or just needed a nudge that never came. That's recoverable money.",
    steps: FOLLOWUP_STEPS,
    sixtyDayTarget:
      '20% or more of previously cold leads convert on follow-up. Zero leads go unfollowed after 24 hours.',
  },
  showup: {
    tagline: 'Your Show Up Plan',
    headline: 'Your plan is built around one thing: protecting the jobs already on your calendar.',
    subline:
      'You did the hard work getting them booked. A simple confirmation sequence makes sure they actually happen.',
    steps: SHOWUP_STEPS,
    sixtyDayTarget: 'No-show rate under 5%. Every missed job followed up automatically within 30 minutes.',
  },
  ask: {
    tagline: 'Your Ask Plan',
    headline: 'Your plan is built around one thing: turning great jobs into visible proof.',
    subline:
      "Your customers are happy to leave reviews. They just need to be asked at exactly the right moment, every single time — without you remembering to do it.",
    steps: ASK_STEPS,
    sixtyDayTarget:
      'Google rating up by at least 0.3 stars. Review volume doubled. Referral requests sent automatically after every completed job.',
  },
  fullsystem: {
    tagline: 'Your Full System Plan',
    headline: 'Your plan covers all four gaps — in the right order.',
    subline:
      "You're not alone in saying all four. It's the most common answer we get, and the most honest one. Here's the sequence that actually moves the needle.",
    steps: FULL_SYSTEM_STEPS,
    sixtyDayTarget: 'All four Booked & Busy scores above 7. Total score above 32. Schedule filling 2–3 weeks in advance.',
  },
};

export function getTemplateConfig(template: PlanTemplate): PlanTemplateConfig {
  return TEMPLATE_CONFIGS[template];
}
