import { Link } from 'react-router';
import { Search, Zap, Users, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'AI Workflow Audit',
    description: 'Deep analysis of your current processes to identify automation opportunities and inefficiencies.',
    href: '/ai-workflow-audit',
  },
  {
    icon: Zap,
    title: 'Lead Conversion Automation',
    description: 'Automated systems that nurture and convert leads while you focus on closing deals.',
    href: '/lead-automation',
  },
  {
    icon: Users,
    title: 'Team Coordination Tools',
    description: 'Streamlined communication and task management to keep your team aligned and productive.',
    href: '/team-coordination',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time insights and reporting to track ROI and optimize your operations continuously.',
    href: '/analytics',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive automation solutions tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const CardContent = (
              <>
                <service.icon className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </>
            );
            return 'href' in service && service.href ? (
              <Link
                key={service.title}
                to={service.href}
                className="block p-6 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer"
              >
                {CardContent}
              </Link>
            ) : (
              <div key={service.title} className="p-6 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
