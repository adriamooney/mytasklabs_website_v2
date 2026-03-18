import { AlertCircle, Clock, Users } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Opening question */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            When a lead comes in at 2pm on a Tuesday — what actually happens?
          </h2>
          <p className="text-xl text-gray-600">
            Take a second and answer that honestly.
          </p>
        </div>

        {/* Common answer card */}
        <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 mb-8 text-center">
          <p className="text-lg text-gray-700 italic">
            &quot;I finish the job I&apos;m on and call them back when I can&quot;
          </p>
          <p className="text-gray-600 mt-4">If it sounds anything like that — you&apos;re not alone. Most owner-operators running one to three trucks answer the same way.</p>
        </div>

        {/* The problem */}
        <div className="space-y-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Here&apos;s the problem with that answer.</h3>
              <p className="text-gray-700 leading-relaxed">
                The customer who just Googled &quot;junk removal near me&quot; didn&apos;t contact just you. They filled out forms on three different websites in about four minutes. They&apos;re waiting to hear back from whoever responds first. Research consistently shows the first company to respond wins that job the majority of the time. After the first hour, the odds drop dramatically.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                The owners winning that race aren&apos;t necessarily faster. Their business responds while they&apos;re still on the truck — automatically, by text, with a quote already attached. By the time they finish unloading, the next job is already on the calendar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                While you&apos;re hauling a couch out of someone&apos;s garage, their system just booked another one. Not because they&apos;re better than you. <strong className="text-gray-900">Because they have something you don&apos;t.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Key insight */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-8 text-center shadow-xl">
          <p className="text-2xl font-bold text-white mb-4">
            The owners with full schedules aren&apos;t better at junk removal.
          </p>
          <p className="text-xl text-indigo-100">
            They&apos;re better at the four moments surrounding it.
          </p>
        </div>

        {/* Transition */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700">
            That&apos;s what this guide is about.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
            It&apos;s not about marketing. It&apos;s not about buying more leads. It&apos;s about what happens after a lead comes in — the four moments that determine whether that lead becomes a job, a five-star review, and a referral, or just another missed opportunity you never knew existed.
          </p>
          <p className="text-gray-600 mt-6 font-medium">
            We call it the Booked & Busy system. And it works whether you&apos;re on a job, in the truck, or asleep.
          </p>
        </div>
      </div>
    </section>
  );
}
