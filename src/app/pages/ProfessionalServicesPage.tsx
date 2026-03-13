import { Link } from 'react-router';
import { FileText, Users, Clock, Check } from 'lucide-react';
import { ProfessionalServiceIcon } from '../components/icons/ProfessionalServiceIcon';
import { InnerPageCTA } from '../components/InnerPageCTA';

const solutions = [
  {
    icon: Users,
    title: 'Client Management',
    description: 'Centralized client profiles, document requests, and status tracking. Know exactly where each engagement stands without digging through email.',
  },
  {
    icon: FileText,
    title: 'Engagement & Proposal Automation',
    description: 'Automated engagement letters, e-signature workflows, and proposal templates. Get clients onboarded and signed faster—especially before busy season.',
  },
  {
    icon: Clock,
    title: 'Time Tracking & Billing',
    description: 'Time entries that flow into billing. Clear visibility into utilization and realization so you capture what you earn and spot capacity gaps.',
  },
];

export function ProfessionalServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-indigo-200">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/#industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li>/</li>
              <li className="text-white">Professional Services</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Professional Services</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Streamline client onboarding, project management, and billing so you focus on delivering exceptional service—not chasing documents and deadlines.
          </p>
        </div>
      </section>

      {/* Overview — sales pitch */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <ProfessionalServiceIcon />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">You&apos;re Experts in Your Work. Your Admin Should Be Too.</h2>
              <p className="text-lg text-gray-700 mb-4">
                Professional services firms—accounting, consulting, legal, architecture—deliver high-value work. But too often, that work is buried under manual intake, document chasing, and billing guesswork. When tax season hits or a big engagement drops, the scramble to get clients onboarded and documents collected becomes a bottleneck.
              </p>
              <p className="text-lg text-gray-700">
                We automate the operations that slow you down: client onboarding, engagement letters, document collection, and time-to-billing. Your team spends less time on admin and more time on the work clients actually pay for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study — Accounting Firm */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Example: How We Helped a Regional CPA Firm</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A 12-person firm serving small businesses and individuals was drowning in document requests and deadline pressure every tax season.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* The Problem */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">!</span>
                The Problem
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">×</span>
                  <span><strong>Document collection chaos.</strong> Clients were emailed lists of what to send—W-2s, 1099s, receipts. Staff chased the same people for weeks. Documents arrived in random formats. Organizing everything before the deadline was a nightmare.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">×</span>
                  <span><strong>Onboarding backed up.</strong> Engagement letters went out by mail or email. Signatures came back inconsistently. New clients slipped through cracks. By January, the firm was already behind on intake for existing clients.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">×</span>
                  <span><strong>Time and billing in spreadsheets.</strong> CPAs logged time loosely or not at all. Billing was assembled manually at month-end. Utilization was a guess. The firm had no clear picture of which engagements were profitable.</span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-white rounded-xl border-2 border-indigo-200 p-8 md:p-10">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
                <Check className="w-6 h-6" />
                How We Solved It
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Automated document requests.</strong> Clients receive a branded portal link with a clear checklist of what to upload. Reminders go out automatically. Staff see at a glance who&apos;s complete and who needs a nudge. Document collection that used to take weeks now happens in days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Streamlined engagement letters.</strong> Engagement letters are sent digitally with e-signature. New clients get an automated onboarding sequence. The firm finishes intake before busy season instead of during it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Time tracking that flows into billing.</strong> CPAs log time against clients and engagements. Reports show utilization and realization. Billing is pulled from actual time instead of estimates. The firm finally knows where they make money—and where they don&apos;t.</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600 italic">
                Result: Document collection completed 3–4 weeks earlier. Engagement letters signed in days, not weeks. Billing cycles shortened and utilization improved. The firm took on 15% more clients in the next tax season without adding staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Build for Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Client management, proposal automation, and time tracking—built to fit how you work
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((item) => (
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

      <InnerPageCTA
        title="Ready to Streamline Your Operations?"
        description="Schedule a free consultation. We'll review your client workflow and show you where automation can reduce admin and improve billing."
      />
    </>
  );
}
