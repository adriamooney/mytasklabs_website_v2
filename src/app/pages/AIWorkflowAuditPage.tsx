import { Link } from 'react-router';
import { Search, FileText, Target, Zap } from 'lucide-react';
import { WorkflowAuditIcon } from '../components/icons/WorkflowAuditIcon';
import { InnerPageCTA } from '../components/InnerPageCTA';

/**
 * AI Workflow Audit — Inner Page Template
 *
 * Structure to replicate for other service/inner pages:
 * 1. Page Hero (compact gradient, breadcrumb, h1, lead)
 * 2. Overview (what + why)
 * 3. What You Get (deliverables as cards)
 * 4. How We Approach It (process steps)
 * 5. Who It's For (use cases)
 * 6. CTA (contact/conversation)
 */

const deliverables = [
  {
    icon: FileText,
    title: 'Process Mapping & Documentation',
    description: 'A clear picture of your current workflows, handoffs, and pain points—with no assumptions or guesswork.',
  },
  {
    icon: Target,
    title: 'Identified Automation Opportunities',
    description: 'Prioritized list of bottlenecks and inefficiencies where automation will deliver the highest ROI.',
  },
  {
    icon: Zap,
    title: 'Implementation Roadmap',
    description: 'Actionable next steps with quick wins you can tackle immediately and a phased plan for larger initiatives.',
  },
];

const approachSteps = [
  {
    step: 1,
    title: 'Discovery Call',
    description: 'We learn about your business, goals, and current workflows in an informal conversation.',
  },
  {
    step: 2,
    title: 'Workflow Review',
    description: 'We map your processes, identify friction points, and document where time and money leak.',
  },
  {
    step: 3,
    title: 'Findings & Recommendations',
    description: 'You receive a focused report with prioritized opportunities and a practical path forward.',
  },
];

const useCases = [
  'Manual data entry that consumes hours each week',
  'Lead follow-up falling through the cracks',
  'Inconsistent handoffs between team members',
  'Reporting built from spreadsheets and copy-paste',
  'Scaling constraints as volume grows',
];

export function AIWorkflowAuditPage() {
  return (
    <>
      {/* Page Hero — compact inner-page hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-indigo-200">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-white">AI Workflow Audit</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold mb-4">AI Workflow Audit</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Deep analysis of your current processes to identify automation opportunities and inefficiencies—so you know exactly where to invest.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Animated icon grouping */}
            <div className="order-2 md:order-1 flex justify-center">
              <WorkflowAuditIcon />
            </div>
            {/* Text — left aligned, placed on right of icon */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is an AI Workflow Audit?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Before we automate anything, we need to understand how work actually flows through your business. An AI Workflow Audit is a focused review of your current processes—where work comes in, how it moves, where it stalls, and where automation will deliver the biggest impact.
              </p>
              <p className="text-lg text-gray-700">
                Unlike paid audits that stop at a slide deck, we deliver actionable findings and a clear roadmap. Our goal is to surface quick wins you can implement immediately and a prioritized plan for larger initiatives as your business grows.
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
              A focused deliverable designed to give you clarity and a clear path forward
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
              A simple, low-friction process—no lengthy questionnaires or endless meetings
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
              Ideal if you&apos;re dealing with any of these common workflow challenges
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {useCases.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Search className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <InnerPageCTA
        title="Ready for Your Workflow Audit?"
        description="Schedule a free consultation to discover where automation can save you time and increase revenue."
      />
    </>
  );
}
