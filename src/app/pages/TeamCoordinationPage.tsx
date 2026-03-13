import { Link } from 'react-router';
import { Users, MessageSquare, CheckSquare, Calendar } from 'lucide-react';
import { TeamCoordinationIcon } from '../components/icons/TeamCoordinationIcon';
import { InnerPageCTA } from '../components/InnerPageCTA';

const deliverables = [
  {
    icon: MessageSquare,
    title: 'Streamlined Communication',
    description: 'Centralized channels and automated updates so everyone stays in the loop—no more scattered threads or missed messages.',
  },
  {
    icon: CheckSquare,
    title: 'Task & Workflow Management',
    description: 'Clear ownership, due dates, and handoffs so work flows smoothly between team members and departments.',
  },
  {
    icon: Calendar,
    title: 'Scheduling & Availability',
    description: 'Automated scheduling, calendar sync, and capacity visibility so you avoid double-booking and overload.',
  },
];

const approachSteps = [
  {
    step: 1,
    title: 'Understand How Your Team Works',
    description: 'We map how work moves between people, where handoffs break down, and what tools you already use.',
  },
  {
    step: 2,
    title: 'Design Coordination Systems',
    description: 'We build workflows, notifications, and task rules that match how your team actually operates.',
  },
  {
    step: 3,
    title: 'Implement & Train',
    description: 'We deploy the system, integrate with your existing tools, and ensure your team adopts it smoothly.',
  },
];

const useCases = [
  'Handoffs between team members that rely on memory or hallway conversations',
  'Multiple tools (Slack, email, spreadsheets) with no single source of truth',
  'Unclear ownership when something urgent comes in',
  'Scheduling chaos with field techs, clients, or appointments',
  'Scaling the team without scaling confusion',
];

export function TeamCoordinationPage() {
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
              <li className="text-white">Team Coordination</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Team Coordination</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Streamlined communication and task management to keep your team aligned and productive—no more dropped balls or duplicated effort.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <TeamCoordinationIcon />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Team Coordination?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Team coordination is about making sure work flows smoothly between people—clear handoffs, shared visibility, and systems that keep everyone aligned without constant check-ins. When done well, your team spends less time on status updates and more time on actual work.
              </p>
              <p className="text-lg text-gray-700">
                We build workflows and integrations that fit how your team actually operates. Whether you need better task management, unified communication, or automated scheduling, we help you move from ad-hoc coordination to a system that scales with your growth.
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
              Systems designed to keep your team aligned without adding more meetings
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
              We start with how your team works today, then build coordination that fits
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
              Ideal if you&apos;re dealing with any of these team coordination challenges
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {useCases.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <InnerPageCTA
        title="Ready to Simplify Team Coordination?"
        description="Schedule a free consultation to discover how we can keep your team aligned and productive."
      />
    </>
  );
}
