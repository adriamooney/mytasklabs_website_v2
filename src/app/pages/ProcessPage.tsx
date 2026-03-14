import { Link } from 'react-router';
import { Check } from 'lucide-react';
import { IdentifyIcon } from '../components/icons/IdentifyIcon';
import { DesignIcon } from '../components/icons/DesignIcon';
import { ImplementIcon } from '../components/icons/ImplementIcon';
import { OptimizeIcon } from '../components/icons/OptimizeIcon';
import { InnerPageCTA } from '../components/InnerPageCTA';

const steps = [
  {
    id: 'identify',
    icon: IdentifyIcon,
    number: 1,
    title: 'Identify Bottlenecks',
    tagline: 'Find where time and money leak.',
    description: 'Before we touch a single workflow, we dig into how work actually flows through your business. We map your processes end-to-end—where requests come in, how they\'re handled, who touches what, and where friction appears. We\'re looking for the pain points that cost you hours each week: manual data entry, follow-ups that fall through the cracks, handoffs that rely on tribal knowledge, or reports built from copy-paste.',
    highlights: [
      'Discovery calls to understand your goals and constraints',
      'Process mapping of current workflows and handoffs',
      'Prioritized list of bottlenecks with estimated impact',
    ],
  },
  {
    id: 'design',
    icon: DesignIcon,
    number: 2,
    title: 'Design Targeted Automation',
    tagline: 'Custom solutions, not templates.',
    description: 'Every business is different. We don\'t hand you a one-size-fits-all playbook—we design automation that fits your tools, your team, and your way of working. Whether that means connecting your CRM to your scheduling system, automating lead nurture sequences, or building custom reporting pipelines, we focus on solutions that solve your specific problems.',
    highlights: [
      'Solutions built for your stack (Salesforce, HubSpot, ServiceTitan, etc.)',
      'Clear architecture before any build begins',
      'Approval at each milestone so nothing surprises you',
    ],
  },
  {
    id: 'implement',
    icon: ImplementIcon,
    number: 3,
    title: 'Implement & Integrate',
    tagline: 'Seamless deployment with your existing systems.',
    description: 'We deploy automation that works alongside what you already use. No rip-and-replace. We integrate with your CRM, your scheduling tools, your email, and your communication channels. Implementation is staged so you can validate each piece before moving to the next, and your team gets the training and documentation they need to own it long-term.',
    highlights: [
      'Phased rollout so you can test and adjust',
      'Documentation and handoff materials',
      'Support during launch and first weeks of operation',
    ],
  },
  {
    id: 'optimize',
    icon: OptimizeIcon,
    number: 4,
    title: 'Optimize & Scale',
    tagline: 'Continuous refinement as you grow.',
    description: 'Automation isn\'t set-it-and-forget-it. As your volume changes, your team evolves, and new tools enter your stack, we help you refine and extend what we built. We monitor performance, identify new opportunities, and scale what works so your operations stay efficient as your business grows.',
    highlights: [
      'Ongoing review of automation performance',
      'Iteration based on real usage and feedback',
      'Expansion into new workflows as priorities shift',
    ],
  },
];

export function ProcessPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-indigo-200">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white">Our Process</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold mb-4">How We Work</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            A proven four-phase approach to transforming your operations—from identifying bottlenecks to scaling what works.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don&apos;t jump straight into building. We start by understanding your workflows, design solutions tailored to your business, implement with care, and optimize over time.
            </p>
          </div>

          {/* Four Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.title}
                  id={step.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-lg text-indigo-600 font-medium mb-4">{step.tagline}</p>
                    <p className="text-gray-700 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="relative w-48 h-48">
                      <StepIcon />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This approach keeps you in control while we do the heavy lifting.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No guesswork</h3>
              <p className="text-gray-600 text-sm">We base every recommendation on how you actually work, not assumptions.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">You stay in the loop</h3>
              <p className="text-gray-600 text-sm">We check in at each phase so you always know what&apos;s next.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Built to last</h3>
              <p className="text-gray-600 text-sm">Documentation and handoff mean your team can own it long after we&apos;re done.</p>
            </div>
          </div>
        </div>
      </section>

      <InnerPageCTA
        title="Ready to Get Started?"
        description="Schedule a free 15-minute consultation. We'll listen to your goals, discuss your workflows, and outline how we can help—with no obligation."
        buttonText="Schedule Consultation"
      />
    </>
  );
}
