import { Link } from 'react-router';
import { ArrowRight, Mail } from 'lucide-react';

export function SalesCTA() {
  return (
    <section id="get-plan" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Score is Telling You Something</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            If you ran the numbers above and came in under 32, you already know which category is dragging you down. That number isn&apos;t a judgment — it&apos;s a location. It tells you exactly where jobs are slipping out.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            Now the question is what to do about it.
          </p>
        </div>

        {/* The problem with manual */}
        <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            You can build all four of these systems manually. Some owners do. Spreadsheet reminders, sticky notes on the dashboard, a note in your phone to text people back.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            It works — right up until the day you&apos;re slammed and the system falls apart because you&apos;re the system.
          </p>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-8 md:p-12 shadow-xl mb-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            My Task Labs built all four specifically for junk removal owner-operators.
          </h3>
          <p className="text-xl text-indigo-100 leading-relaxed mb-6">
            When a lead comes in, your system responds instantly by SMS, delivers a quote, and books the job — automatically, whether you&apos;re on a truck or off the clock. Follow-up sequences, appointment confirmations, and review requests all run the same way. The whole thing works without you being involved in each step.
          </p>
          <p className="text-lg text-indigo-200">
            We don&apos;t do one-size-fits-all. Before we set anything up, we look at your specific operation — your volume, your market, your current process — and build a plan around what will actually move the needle for you.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-6">
          {/* Primary CTA */}
          <div className="bg-gradient-to-br from-gray-50 to-indigo-50 border-2 border-indigo-200 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Get Your Custom Plan</h4>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you want to raise your score and start booking more consistently, we&apos;ll build you a custom plan for your specific business. Answer a few short questions and we&apos;ll send it back to you — no call required.
            </p>
            <Link
              to="/custom-plan"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:scale-105 group"
            >
              Get Your Custom Plan
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-sm text-gray-600 mt-4">Free. Takes two minutes. No pitch.</p>
          </div>

          {/* Secondary CTA */}
          {/* <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-indigo-600" />
              <h4 className="text-lg font-semibold text-gray-900">Not Ready to Chat Yet?</h4>
            </div>
            <p className="text-gray-700">
              <a href="/contact" className="text-indigo-600 hover:text-indigo-700 font-medium">Contact us</a> and tell us your score. We&apos;ll send you the one thing to fix first.
            </p>
          </div> */}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200 text-center">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">My Task Labs</span> · mytasklabs.us · Built for junk removal owner-operators
          </p>
        </div>
      </div>
    </section>
  );
}
