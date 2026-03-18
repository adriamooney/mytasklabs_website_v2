import { RespondIcon } from './icons/RespondIcon';
import { FollowUpIcon } from './icons/FollowUpIcon';
import { ShowUpIcon } from './icons/ShowUpIcon';
import { AskIcon } from './icons/AskIcon';

const steps = [
  {
    number: '01',
    title: 'RESPOND',
    subtitle: 'Your business quotes and books new leads automatically — even while you\'re on a job.',
    description: "When a new lead comes in, an automatic SMS response goes out within 60 seconds. It asks a few short qualifying questions, delivers a quote, and if they're ready to book, confirms the appointment — all over text, without you touching your phone. This runs at 2pm on a Tuesday and at 11pm on a Saturday. You don't lose the job because you didn't know about it in time. Your business was already handling it.",
    Icon: RespondIcon,
    color: 'yellow',
  },
  {
    number: '02',
    title: 'FOLLOW UP',
    subtitle: 'Re-engage leads who didn\'t book the first time.',
    description: "Most leads don't book on first contact. But most owner-operators follow up once, hear nothing, and move on. The money is in the second and third touchpoint. A simple two-message sequence — sent at the right intervals — converts a meaningful percentage of leads that would otherwise go cold forever.",
    Icon: FollowUpIcon,
    color: 'blue',
  },
  {
    number: '03',
    title: 'SHOW UP',
    subtitle: 'Confirm every appointment before you drive to it.',
    description: "A no-show costs you time, fuel, and a slot you could have filled with a paying job. A confirmation text the evening before and a reminder the morning of the job dramatically cut no-show rates. It also makes you look more professional than 90% of your competitors before you've lifted a single piece of furniture.",
    Icon: ShowUpIcon,
    color: 'green',
  },
  {
    number: '04',
    title: 'ASK',
    subtitle: 'Request a review and a referral after every job.',
    description: "The owners stacking five-star reviews aren't luckier than you. They're asking at the right moment, every single time, without relying on memory. A message sent 30 minutes after the job wraps — when the customer is standing in their cleared-out space feeling good about the decision — converts at a much higher rate than one sent three days later.",
    Icon: AskIcon,
    color: 'purple',
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string; hover: string }> = {
  yellow: {
    border: 'border-yellow-200',
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    hover: 'group-hover:border-yellow-400 group-hover:bg-yellow-50/50',
  },
  blue: {
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    hover: 'group-hover:border-blue-400 group-hover:bg-blue-50/50',
  },
  green: {
    border: 'border-green-200',
    bg: 'bg-green-50',
    text: 'text-green-700',
    hover: 'group-hover:border-green-400 group-hover:bg-green-50/50',
  },
  purple: {
    border: 'border-purple-200',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    hover: 'group-hover:border-purple-400 group-hover:bg-purple-50/50',
  },
};

export function FourPartSystem() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Booked & Busy System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four things separate a full schedule from a half-empty one. Most owners are doing one or two of them. The ones who are booked out three weeks in advance are doing all four — consistently, without thinking about it.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step) => {
            const colors = colorClasses[step.color];
            const StepIcon = step.Icon;
            return (
              <div
                key={step.number}
                className={`group bg-white border-2 ${colors.border} rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${colors.hover}`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <StepIcon />
                </div>

                {/* Number badge */}
                <div className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-bold mb-4`}>
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>

                {/* Subtitle */}
                <p className="text-lg font-semibold text-gray-700 mb-4">{step.subtitle}</p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
