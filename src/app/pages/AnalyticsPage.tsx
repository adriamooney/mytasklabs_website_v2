import { Link } from 'react-router';
import { BarChart3, LineChart, TrendingUp, Activity } from 'lucide-react';
import { AnalyticsIcon } from '../components/icons/AnalyticsIcon';
import { InnerPageCTA } from '../components/InnerPageCTA';

const deliverables = [
  {
    icon: LineChart,
    title: 'Real-Time Dashboards',
    description: 'Live views of your key metrics—leads, conversions, pipeline health, and operational performance—so you always know where you stand.',
  },
  {
    icon: TrendingUp,
    title: 'ROI & Performance Tracking',
    description: 'Clear visibility into what drives revenue and where automation is paying off, with actionable benchmarks to improve over time.',
  },
  {
    icon: Activity,
    title: 'Automated Reporting',
    description: 'Reports that generate themselves—no more manual spreadsheet assembly. Data flows from your systems into the views you need.',
  },
];

const approachSteps = [
  {
    step: 1,
    title: 'Define What Matters',
    description: 'We identify the metrics that actually drive your business and build reporting around those—not vanity numbers.',
  },
  {
    step: 2,
    title: 'Connect Your Data Sources',
    description: 'We integrate your CRM, tools, and workflows so data flows into a single source of truth.',
  },
  {
    step: 3,
    title: 'Build Dashboards & Reports',
    description: 'We create views and automated reports that give you real-time visibility and ongoing optimization insights.',
  },
];

const useCases = [
  'Reporting built from manual spreadsheets and copy-paste',
  'Unclear whether automation and marketing efforts are driving ROI',
  'Data scattered across tools with no single view',
  'Needing to show performance to stakeholders or investors',
  'Wanting to optimize continuously but lacking visibility',
];

export function AnalyticsPage() {
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
              <li className="text-white">Analytics</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Performance Analytics</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Real-time insights and reporting to track ROI and optimize your operations continuously—so you make decisions with data, not guesswork.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <AnalyticsIcon />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Performance Analytics?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Performance analytics turns your operational data into clear, actionable views. Instead of cobbling together spreadsheets or wondering whether your automation is working, you get real-time dashboards and reports that show exactly what&apos;s driving results.
              </p>
              <p className="text-lg text-gray-700">
                We build systems that connect your CRM, workflows, and tools into a single source of truth. The goal is continuous optimization—knowing what to double down on, what to fix, and how your business is performing at a glance.
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
              Reporting and visibility built around the metrics that drive your business
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
              We start with the metrics that matter, then build the infrastructure to surface them
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
              Ideal if you&apos;re dealing with any of these analytics and reporting challenges
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {useCases.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <InnerPageCTA
        title="Ready for Clear Visibility Into Your Performance?"
        description="Schedule a free consultation to discover how analytics can help you optimize and scale."
      />
    </>
  );
}
