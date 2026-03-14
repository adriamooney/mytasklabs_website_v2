import { Link } from 'react-router';
import { ProcessCard } from './ProcessCard';
import { IdentifyIcon } from './icons/IdentifyIcon';
import { DesignIcon } from './icons/DesignIcon';
import { ImplementIcon } from './icons/ImplementIcon';
import { OptimizeIcon } from './icons/OptimizeIcon';

const steps = [
  {
    icon: IdentifyIcon,
    title: 'Identify Bottlenecks',
    description: 'We analyze your current workflows to find areas costing you time and money.',
    href: '/process#identify',
  },
  {
    icon: DesignIcon,
    title: 'Design Targeted Automation',
    description: 'Custom solutions built specifically for your unique business challenges.',
    href: '/process#design',
  },
  {
    icon: ImplementIcon,
    title: 'Implement & Integrate',
    description: 'Seamless deployment that works with your existing tools and systems.',
    href: '/process#implement',
  },
  {
    icon: OptimizeIcon,
    title: 'Optimize & Scale',
    description: 'Continuous refinement to maximize efficiency as your business grows.',
    href: '/process#optimize',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven approach to transforming your operations
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessCard key={step.title} number={index + 1} href={step.href} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}