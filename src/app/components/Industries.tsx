import { Link } from 'react-router';
import { IndustryCard } from './IndustryCard';
import { HomeServiceIcon } from './icons/HomeServiceIcon';
import { ProfessionalServiceIcon } from './icons/ProfessionalServiceIcon';
import { OperationsIcon } from './icons/OperationsIcon';

const industries = [
  {
    icon: HomeServiceIcon,
    title: 'Home Service Professionals',
    description: 'Automate scheduling, customer communications, and job dispatching to maximize your team\'s productivity in the field.',
    features: ['Automated booking', 'Customer follow-ups', 'Route optimization'],
    href: '/home-services',
  },
  {
    icon: ProfessionalServiceIcon,
    title: 'Professional Services',
    description: 'Streamline client onboarding, project management, and billing to focus on delivering exceptional service.',
    features: ['Client management', 'Proposal automation', 'Time tracking'],
    href: '/professional-services',
  },
  {
    icon: OperationsIcon,
    title: 'Operation Heavy Businesses',
    description: 'Optimize complex workflows, inventory management, and cross-team coordination to reduce operational overhead.',
    features: ['Inventory sync', 'Workflow automation', 'Data integration'],
    href: '/operations',
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized automation solutions for your specific industry challenges
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const { href, ...cardProps } = industry as typeof industry & { href?: string };
            return href ? (
              <Link key={industry.title} to={href} className="block">
                <IndustryCard {...cardProps} />
              </Link>
            ) : (
              <IndustryCard key={industry.title} {...industry} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
