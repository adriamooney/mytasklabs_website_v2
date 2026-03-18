import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { CUSTOM_PLAN_QUIZ_QUESTIONS } from '../data/customPlanQuiz';

const TOTAL_STEPS = CUSTOM_PLAN_QUIZ_QUESTIONS.length + 1;

export function CustomPlanQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [anythingElse, setAnythingElse] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const isLastQuestion = step === CUSTOM_PLAN_QUIZ_QUESTIONS.length - 1;
  const isFinalStep = step === CUSTOM_PLAN_QUIZ_QUESTIONS.length;

  const currentQuestion = CUSTOM_PLAN_QUIZ_QUESTIONS[step];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  const progressPercent = ((step + 1) / TOTAL_STEPS) * 100;

  const handleSelect = (value: string) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (isLastQuestion && currentAnswer) {
      setStep((s) => s + 1);
    } else if (!isLastQuestion && currentAnswer) {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    setStep((s) => Math.max(0, s - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('sending');
    setErrorMessage('');

    const apiBase = import.meta.env.VITE_API_URL ?? '';
    const apiUrl = `${apiBase}/api/submit-plan`;

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, answers, anythingElse }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? 'Failed to generate plan');
      }
      sessionStorage.setItem('CUSTOM_PLAN_DATA', JSON.stringify(data));
      navigate('/your-plan');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    }
  };

  return (
    <section className="min-h-[70vh] pb-12">
      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-8 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Get Your Custom Plan</h1>
          <p className="text-indigo-100">11 short questions — we&apos;ll build your custom plan.</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="sticky top-[57px] z-10 bg-white border-b border-gray-200 sm:top-14">
        <div className="h-2 bg-gray-100">
          <div
            className="h-full bg-indigo-600 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="max-w-lg mx-auto px-6 py-3 flex justify-between items-center text-sm text-gray-500">
          <span>
            {step + 1} of {TOTAL_STEPS}
          </span>
          {step > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          )}
        </div>
      </div>

      <div className="max-w-lg mx-auto px-6 py-8 md:py-12">
        {isFinalStep ? (
          /* Final step: optional text + email + submit */
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Send Me My Custom Plan
              </h1>
              <p className="text-gray-600">
                We&apos;ll build a plan based on your answers and email it to you.
              </p>
            </div>

            <div>
              <Label htmlFor="email" className="text-base font-semibold">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                className="mt-3 h-12 text-base"
              />
            </div>

            <div>
              <Label htmlFor="anything-else" className="text-base font-semibold">
                Anything else we should know? <span className="font-normal text-gray-500">(optional)</span>
              </Label>
              <Textarea
                id="anything-else"
                value={anythingElse}
                onChange={(e) => setAnythingElse(e.target.value)}
                placeholder="Tell us about your business, goals, or specific challenges..."
                rows={4}
                className="mt-3 text-base"
              />
            </div>

            {status === 'error' && (
              <div className="p-4 rounded-lg bg-red-50 text-red-800 text-sm">
                {errorMessage}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === 'sending'}
              className="w-full h-14 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  Send Me My Custom Plan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>
        ) : (
          /* Question step */
          <>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 text-base font-medium transition-all duration-200 flex items-center justify-between ${
                    currentAnswer === option
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50'
                  }`}
                >
                  <span className="pr-4">{option}</span>
                  {currentAnswer === option && (
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-10 flex justify-end">
              <Button
                type="button"
                onClick={handleNext}
                disabled={!currentAnswer}
                size="lg"
                className="h-12 px-6 font-semibold"
              >
                {isLastQuestion ? 'Continue' : 'Next'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
