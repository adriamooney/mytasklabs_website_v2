export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
}

export const CUSTOM_PLAN_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'How many trucks are you currently running?',
    options: [
      'Just me (owner-operator, no crew)',
      '1 truck with a helper',
      '2–3 trucks',
      '4+ trucks',
    ],
  },
  {
    id: 'q2',
    question: 'How long have you been running your junk removal business?',
    options: [
      'Less than 1 year',
      '1–3 years',
      '3+ years',
    ],
  },
  {
    id: 'q3',
    question: 'How many jobs do you complete in a typical week?',
    options: [
      '1–5 jobs',
      '6–15 jobs',
      '16–30 jobs',
      '30+ jobs',
    ],
  },
  {
    id: 'q4',
    question: 'Where do most of your leads come from? (pick your top one)',
    options: [
      'Google / search ads',
      'Angi, Thumbtack, or similar lead platforms',
      'Facebook / social media',
      'Word of mouth / referrals',
      'My own website',
    ],
  },
  {
    id: 'q5',
    question: 'When a new lead comes in, how do you usually find out about it?',
    options: [
      'A phone call comes in directly',
      'A text or email notification',
      'I check my apps manually',
      'It depends — no consistent process',
    ],
  },
  {
    id: 'q6',
    question: 'How do you handle leads that come in evenings or weekends?',
    options: [
      'Same as any other lead — I get back to them when I can',
      'I try to respond quickly even after hours',
      'They mostly wait until the next business day',
      "I don't get many leads outside business hours",
    ],
  },
  {
    id: 'q7',
    question: 'Are you currently using any job management software?',
    options: [
      'Yes — Jobber',
      'Yes — Housecall Pro',
      'Yes — ServiceTitan',
      'Yes — something else',
      'No — I use spreadsheets or paper',
      'No — I just manage it myself',
    ],
  },
  {
    id: 'q8',
    question: 'What do you use for your calendar and scheduling?',
    options: [
      'Jobber / Housecall Pro (built-in)',
      'Google Calendar',
      'A whiteboard or paper schedule',
      'I keep it in my head',
      'Something else',
    ],
  },
  {
    id: 'q9',
    question: 'Do you currently send any kind of automated messages to customers — confirmations, follow-ups, review requests?',
    options: [
      'Yes, I have some automations set up',
      'I do it manually when I remember',
      'No, I don\'t do this at all',
    ],
  },
  {
    id: 'q10',
    question: "What's the biggest gap in your current process? (pick the one that stings most)",
    options: [
      "I'm too slow responding to new leads",
      'Leads go cold and I never follow up',
      'Jobs get no-showed or forgotten',
      "I never get reviews even when the job goes great",
      'All of the above honestly',
    ],
  },
  {
    id: 'q11',
    question: 'What would a win look like for you in the next 60 days? (pick one)',
    options: [
      'A fuller schedule with fewer gaps',
      'More five-star reviews on Google',
      'Spending less time on my phone chasing people',
      "Knowing leads aren't slipping through the cracks",
      'All of the above',
    ],
  },
];
