import { TrendingUp, Calendar, Star, Target } from 'lucide-react';

export function CaseStudy() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-indigo-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What This Looks Like in Practice</h2>
          <p className="text-xl text-gray-300">A real operator, real results</p>
        </div>

        {/* Story card */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl mb-8">
          {/* Intro */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Marcus runs a two-truck operation outside Columbus, Ohio. He&apos;s been in junk removal for four years. Good reputation in his area, solid workmanship, reasonable prices. By every measure that matters on the job site, he&apos;s one of the better operators around.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold mb-4">
              But his schedule had gaps he couldn&apos;t explain.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Some weeks were packed. Others had two or three empty slots mid-week for no obvious reason. He wasn&apos;t losing jobs to competitors on price — he&apos;d checked. His reviews were decent. His service area was solid. The work was there. It just wasn&apos;t always booking.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
              When he scored himself on the Booked & Busy system, the picture got clearer fast.
            </p>
          </div>

          {/* Before scores */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Marcus&apos;s scores before:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Respond:</span>
                <span className="text-2xl font-bold text-red-600">2/10</span>
              </div>
              <div className="text-sm text-gray-600 italic">usually called back within a few hours</div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">Follow Up:</span>
                <span className="text-2xl font-bold text-red-600">1/10</span>
              </div>
              <div className="text-sm text-gray-600 italic">one call, then moved on</div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">Show Up:</span>
                <span className="text-2xl font-bold text-orange-600">7/10</span>
              </div>
              <div className="text-sm text-gray-600 italic">usually confirmed, sometimes forgot</div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">Ask:</span>
                <span className="text-2xl font-bold text-red-600">1/10</span>
              </div>
              <div className="text-sm text-gray-600 italic">mentioned it occasionally at the end of a job</div>
            </div>
            <div className="mt-6 pt-6 border-t-2 border-red-300 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Total:</span>
              <span className="text-4xl font-bold text-red-600">11 out of 40</span>
            </div>
            <p className="text-center text-gray-700 font-semibold mt-4">
              He was doing the actual job at a nine out of ten. He was doing everything around it at a two.
            </p>
          </div>

          {/* What he did */}
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">He made four changes. Not big ones.</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <span>Set up an automatic text that went out within 60 seconds any time a new lead came in</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <span>Built a two-message follow-up sequence for leads that went quiet after the first contact</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <span>Scheduled a confirmation text to go out the evening before every booked job</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <span>Set up a review request that fired automatically 30 minutes after he marked a job complete</span>
              </li>
            </ul>
            <p className="mt-6 text-gray-700 font-semibold text-center">
              None of those changes required him to hire anyone. None of them required him to check his phone more often. They just ran.
            </p>
          </div>

          {/* Results */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Sixty days later:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">His schedule filled out two to three weeks in advance for the first time</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">His Google rating climbed from 4.2 to 4.8 on the back of consistent review requests</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">His no-show rate dropped to near zero</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">He stopped losing leads he never knew he was losing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key insight */}
        <div className="text-center">
          <p className="text-2xl font-bold text-white mb-2">
            He didn&apos;t get better at junk removal.
          </p>
          <p className="text-2xl font-bold text-indigo-300 mb-6">
            He got better at the four moments around it.
          </p>
          <p className="text-xl text-gray-300">
            The gaps in your schedule aren&apos;t a lead problem. They&apos;re a system problem.
          </p>
        </div>
      </div>
    </section>
  );
}
