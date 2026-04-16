import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const PLAN_STORAGE_KEY = 'CUSTOM_PLAN_DATA';

interface PlanScores {
  respond: number;
  followUp: number;
  showUp: number;
  ask: number;
  total: number;
}

interface PlanStep {
  title: string;
  subtitle: string;
  fixedCopy: string;
  aiInsert: string;
}

interface PlanData {
  template: string;
  email: string;
  tagline: string;
  headline: string;
  subline: string;
  scores: PlanScores;
  steps: PlanStep[];
  sixtyDayTarget: string;
}

export function YourPlanPage() {
  const [plan, setPlan] = useState<PlanData | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(PLAN_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as PlanData;
        setPlan(parsed);
      }
    } catch {
      setPlan(null);
    }
  }, []);

  if (!plan) {
    return (
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-16">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">View Your Custom Plan</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your custom plan has been sent to your email. If you don&apos;t see it, check your spam folder.
          </p>
          <Link href="/custom-plan">
            <Button size="lg">Take the quiz again</Button>
          </Link>
        </div>
      </section>
    );
  }

  const { tagline, headline, subline, scores, steps, sixtyDayTarget } = plan;

  return (
    <section className="pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-indigo-200 text-sm font-medium mb-2">{tagline}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{headline}</h1>
          <p className="text-xl text-indigo-100">{subline}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-8">
        {/* Score display */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Booked & Busy Scores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Respond</p>
              <p className="text-2xl font-bold text-indigo-600">{scores.respond}/10</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Follow Up</p>
              <p className="text-2xl font-bold text-indigo-600">{scores.followUp}/10</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Show Up</p>
              <p className="text-2xl font-bold text-indigo-600">{scores.showUp}/10</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Ask</p>
              <p className="text-2xl font-bold text-indigo-600">{scores.ask}/10</p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-indigo-600">{scores.total}/40</span>
          </div>
        </div>

        {/* Plan steps */}
        <div className="space-y-12 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-indigo-600 font-medium">{step.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{step.fixedCopy}</p>
              {step.aiInsert && (
                <div className="bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg p-4">
                  <p className="text-gray-800 leading-relaxed italic">{step.aiInsert}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 60-day target */}
        <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">60-day target</h3>
          <p className="text-gray-700 leading-relaxed">{sixtyDayTarget}</p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-50 to-indigo-50 border-2 border-indigo-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to put this in place?</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            If you want to raise your score and start booking more consistently, we&apos;ll set this up for your
            specific operation — no call required to get started.
          </p>
          <a
            href="https://zcal.co/adriamooney/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Get started with My Task Labs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="text-sm text-gray-600 mt-4">Free to start. No long-term contracts.</p>
        </div>
      </div>
    </section>
  );
}
