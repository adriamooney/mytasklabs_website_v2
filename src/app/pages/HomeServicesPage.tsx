import { Link } from 'react-router';
import { Calendar, MapPin, Wrench, Check } from 'lucide-react';
import { HomeServiceIcon } from '../components/icons/HomeServiceIcon';
import { InnerPageCTA } from '../components/InnerPageCTA';

const solutions = [
  {
    icon: Calendar,
    title: 'Automated Booking',
    description: 'Online scheduling that syncs with your dispatch. Customers book their own appointments—no more phone tag, no double-booking.',
  },
  {
    icon: Wrench,
    title: 'Intelligent Job Dispatch',
    description: 'Smart routing that considers location, skills, and availability. Get the right tech to the right job with minimal back-and-forth.',
  },
  {
    icon: MapPin,
    title: 'Customer Follow-Ups',
    description: 'Automated confirmations, reminders, and post-job follow-ups so you never lose a customer to silence or a missed callback.',
  },
];

export function HomeServicesPage() {
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
              <li className="text-white">Home Services</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Home Service Professionals</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Stop losing jobs to slow callbacks and chaotic scheduling. We help HVAC, plumbing, landscaping, and trade contractors run tighter operations and book more work.
          </p>
        </div>
      </section>

      {/* Overview — sales pitch */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <HomeServiceIcon />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Technicians Are Your Money Makers. Let Them Work.</h2>
              <p className="text-lg text-gray-700 mb-4">
                Home service businesses live or die by how fast they respond and how well they schedule. When your office is drowning in phone calls, texts, and manual calendar juggling, you&apos;re leaving money on the table—and your best techs are sitting in traffic or stuck between mismatched jobs.
              </p>
              <p className="text-lg text-gray-700">
                We automate the parts that shouldn&apos;t require a human: booking, confirmations, reminders, and intelligent dispatch. Your team stays in the field. Your customers get faster, cleaner experiences. You get more jobs completed per day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Example: How We Helped a Regional HVAC & Plumbing Company</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A 10-truck operation in the Pacific Northwest was growing—but their operations weren&apos;t keeping up.
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
                  <span><strong>Leads going cold.</strong> Estimate requests came in by phone and web form. The office manager would call back—sometimes same day, often the next. By then, customers had already booked with faster competitors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">×</span>
                  <span><strong>Scheduling chaos.</strong> Dispatchers juggled multiple calendars by hand. Techs got conflicting texts. Customers weren&apos;t always reminded. No-shows and last-minute reschedules ate into productivity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">×</span>
                  <span><strong>Routes that didn&apos;t make sense.</strong> Jobs were assigned by &quot;who&apos;s available&quot;—not by who was closest or whose skills fit best. Techs spent extra hours driving instead of billing.</span>
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
                  <span><strong>Instant lead response.</strong> New estimate requests trigger an automated SMS and email within minutes. The customer gets confirmation and a link to self-schedule. No more waiting for a callback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Automated booking and reminders.</strong> Customers book online. They receive confirmations and 24-hour reminders. The dispatch board updates in real time. No-shows dropped by over 40%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Smart dispatch.</strong> Jobs are routed by location and skill set. Techs see their day in one place. Fewer miles driven, more jobs completed—without adding headcount.</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600 italic">
                Result: Faster lead conversion, fewer missed appointments, and techs completing 2–3 more jobs per week on average. The office staff now focuses on exceptions and quality, not phone tag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Build for Home Service Pros</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Systems that automate scheduling, customer communications, and job dispatching so your team stays productive in the field
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
        title="Ready to Run a Tighter Operation?"
        description="Schedule a free consultation. We'll review your current setup and show you exactly where automation can save time and book more work."
      />
    </>
  );
}
