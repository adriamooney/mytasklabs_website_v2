import { Link } from 'react-router';
import { Zap, Mail, Target, UserPlus } from 'lucide-react';
import { LeadAutomationIcon } from '../components/icons/LeadAutomationIcon';
import { InnerPageCTA } from '../components/InnerPageCTA';

const deliverables = [
  {
    icon: Mail,
    title: 'Automated Nurture Sequences',
    description: 'Timed email and SMS flows that keep leads engaged without manual follow-up—so you focus on closing, not chasing.',
  },
  {
    icon: Target,
    title: 'Lead Scoring & Routing',
    description: 'Smart rules that prioritize hot leads and route them to the right person at the right time.',
  },
  {
    icon: Zap,
    title: 'CRM Integration',
    description: 'Systems that plug into your existing tools so every touchpoint is captured and nothing falls through the cracks.',
  },
];

const approachSteps = [
  {
    step: 1,
    title: 'Map Your Funnel',
    description: 'We document how leads enter your pipeline, where they stall, and what happens between first contact and close.',
  },
  {
    step: 2,
    title: 'Design Nurture & Handoff Rules',
    description: 'We build automated sequences and routing logic tailored to your sales process and team.',
  },
  {
    step: 3,
    title: 'Implement & Iterate',
    description: 'We deploy the system, integrate with your CRM, and refine based on real conversion data.',
  },
];

const useCases = [
  'Leads going cold because follow-up is manual and inconsistent',
  'Long sales cycles where prospects need nurturing over time',
  'High lead volume and not enough bandwidth to touch everyone',
  'Multiple team members and unclear lead ownership',
  'Wanting to scale outreach without scaling headcount',
];

export function LeadAutomationPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-indigo-200">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-white">Lead Automation</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Lead Automation</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Automated systems that nurture and convert leads while you focus on closing deals—no more chasing, no more drop-offs.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <LeadAutomationIcon />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Lead Automation?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Lead automation takes the manual work out of nurturing and routing prospects. Instead of relying on spreadsheets, memory, or sheer hustle to follow up, you use systems that automatically engage leads at the right moment and hand them off when they&apos;re ready to talk.
              </p>
              <p className="text-lg text-gray-700">
                We build sequences and rules that fit your sales process—whether you need simple email drips, multi-channel nurture, or smart routing to your team. The goal is more qualified conversations and fewer leads left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You Get</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Systems designed to keep your pipeline moving and your team focused on closing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <item.icon className="h-10 w-10 text-indigo-600 mb-6 transition-transform duration-500 group-hover:scale-105" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-indigo-600">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Approach It */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Approach It</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We start with your funnel, then build automation that fits how you actually sell
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {approachSteps.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who It&apos;s For</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ideal if you&apos;re dealing with any of these lead management challenges
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {useCases.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <UserPlus className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <InnerPageCTA
        title="Ready to Automate Your Lead Process?"
        description="Schedule a free consultation to discover how automation can convert more leads while you focus on closing."
      />
    </>
  );
}
