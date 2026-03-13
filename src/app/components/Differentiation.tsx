import { X, Check } from 'lucide-react';
import { TraditionalIcon } from './icons/TraditionalIcon';
import { MyTaskLabsIcon } from './icons/MyTaskLabsIcon';

const comparisons = [
  {
    traditional: 'One-size-fits-all templates',
    myTaskLabs: 'Custom-built for your unique workflow',
  },
  {
    traditional: 'Cookie-cutter, prebuilt playbooks and templates.',
    myTaskLabs: 'Experts in AI and operational business systems.',
  },
  {
    traditional: 'Limited industry and implementation experience.',
    myTaskLabs: 'Free, focused workflow audit to surface quick wins.',
  },
  {
    traditional: 'Paid audits that stop at a slide deck.',
    myTaskLabs: 'Ongoing support and iteration as your volume changes.',
  },
  {
    traditional: 'No long-term ownership of workflow performance.',
    myTaskLabs: 'Ongoing support and iteration as your volume changes.',
  },
];

export function Differentiation() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose My Task Labs?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not your typical automation agency. Here's what makes us different.
          </p>
        </div>

        {/* Icon comparison */}
        <div className="flex justify-center items-center gap-16 mb-16">
          <div className="text-center">
            <TraditionalIcon />
            <h3 className="text-xl font-semibold text-gray-600 mt-6">Traditional Agencies</h3>
          </div>
          <div className="hidden md:block text-6xl font-bold text-indigo-200">VS</div>
          <div className="text-center">
            <MyTaskLabsIcon />
            <h3 className="text-xl font-semibold text-indigo-600 mt-6">My Task Labs</h3>
          </div>
        </div>

        {/* Comparison grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional column */}
            <div className="space-y-4">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 text-center mb-6">
                <h4 className="text-lg font-semibold text-gray-700">Traditional Approach</h4>
              </div>
              {comparisons.map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center transition-all duration-300 group-hover:bg-red-200 group-hover:scale-110">
                        <X className="w-4 h-4 text-red-600" strokeWidth={3} />
                      </div>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">{item.traditional}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* My Task Labs column */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 border-2 border-indigo-600 rounded-lg p-4 text-center mb-6 shadow-lg">
                <h4 className="text-lg font-semibold text-white">My Task Labs Way</h4>
              </div>
              {comparisons.map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white border-2 border-indigo-200 rounded-lg p-4 transition-all duration-300 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1 hover:bg-indigo-50/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                        <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium transition-colors duration-300 group-hover:text-indigo-700">{item.myTaskLabs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}