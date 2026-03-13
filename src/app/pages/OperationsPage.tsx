import { Link } from 'react-router';
import { Package, GitBranch, Database, Check } from 'lucide-react';
import { OperationsIcon } from '../components/icons/OperationsIcon';
import { InnerPageCTA } from '../components/InnerPageCTA';

const solutions = [
  {
    icon: Package,
    title: 'Inventory Sync',
    description: 'Real-time visibility across locations and channels. Automated reorder triggers and stock alerts so you never oversell or run out when it matters.',
  },
  {
    icon: GitBranch,
    title: 'Workflow Automation',
    description: 'Order-to-fulfillment flows that move work between teams without manual handoffs. Exceptions are flagged; routine steps run automatically.',
  },
  {
    icon: Database,
    title: 'Data Integration',
    description: 'Connect your ERP, e‑commerce, warehouse, and shipping systems. One source of truth instead of spreadsheets and duplicate entry.',
  },
];

export function OperationsPage() {
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
              <li className="text-white">Operations</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Operation Heavy Businesses</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Optimize complex workflows, inventory management, and cross-team coordination to reduce operational overhead—so your systems work as hard as your people.
          </p>
        </div>
      </section>

      {/* Overview — sales pitch */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <OperationsIcon />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">When Operations Run on Spreadsheets, Everybody Pays.</h2>
              <p className="text-lg text-gray-700 mb-4">
                Distributors, manufacturers, and multi-location businesses move a lot of stuff—inventory, orders, shipments, approvals. When that flow relies on manual handoffs, duplicated data, and &quot;I'll email you when it's done,&quot; you get stockouts, wrong shipments, and teams stuck waiting on each other.
              </p>
              <p className="text-lg text-gray-700">
                We build the connectors and workflows that tie your systems together. Inventory stays in sync. Orders move from intake to fulfillment without falling through cracks. You get visibility and control without adding headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Example: How We Helped a Regional Wholesale Distributor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A company supplying restaurants and retailers from two warehouses was growing—but their operations were held together by spreadsheets and tribal knowledge.
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
                  <span><strong>Inventory that didn&apos;t match reality.</strong> Each warehouse had its own spreadsheet. Sales quoted from one; fulfillment pulled from another. Oversells happened. Stockouts happened. Nobody had a single view of what was where.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">×</span>
                  <span><strong>Orders lost in the handoff.</strong> Orders came in by email, phone, and a clunky portal. Someone re-keyed them into the system. Picking tickets were printed or emailed. Warehouse and logistics didn&apos;t always get the same information. Shipments went out wrong or late.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">×</span>
                  <span><strong>Data scattered everywhere.</strong> QuickBooks for invoicing. Spreadsheets for inventory. Email for order confirmations. Every report required pulling from multiple places and stitching it together by hand.</span>
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
                  <span><strong>Unified inventory sync.</strong> Both warehouses feed into one system. Sales see real-time availability. Automated reorder points trigger when stock gets low. Oversells dropped to near zero. Stockouts dropped by over 60%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Automated order-to-fulfillment workflow.</strong> Orders enter once—from portal, email, or phone intake—and flow through to picking and shipping. Warehouse gets clear pick lists. Exceptions are flagged. No more lost orders or wrong shipments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Systems connected.</strong> ERP, e-commerce, and shipping talk to each other. Inventory updates flow automatically. Invoicing pulls from actual shipments. The &quot;report that takes all day&quot; now runs in minutes.</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600 italic">
                Result: Inventory accuracy went from ~70% to over 95%. Order-to-ship time dropped by nearly half. The ops team stopped firefighting and started planning. They added a third warehouse six months later—and the new location plugged into the same workflows from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Build for Operations Heavy Businesses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Inventory sync, workflow automation, and data integration—built to handle the complexity you actually run
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
        title="Ready to Untangle Your Operations?"
        description="Schedule a free consultation. We'll map your workflows and show you where integration and automation can cut overhead and reduce errors."
      />
    </>
  );
}
