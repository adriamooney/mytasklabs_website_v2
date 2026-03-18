import { useState } from 'react';
import { Calculator, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const categories = [
  {
    name: 'Respond',
    standard: 'Replied within 60 seconds of the lead coming in',
    color: 'yellow',
  },
  {
    name: 'Follow Up',
    standard: "Sent at least 2 follow-ups to leads who didn't book",
    color: 'blue',
  },
  {
    name: 'Show Up',
    standard: 'Sent a confirmation before every scheduled job',
    color: 'green',
  },
  {
    name: 'Ask',
    standard: 'Requested a review after every completed job',
    color: 'purple',
  },
];

const colorClasses: Record<string, string> = {
  yellow: 'border-yellow-400 focus:ring-yellow-500',
  blue: 'border-blue-400 focus:ring-blue-500',
  green: 'border-green-400 focus:ring-green-500',
  purple: 'border-purple-400 focus:ring-purple-500',
};

export function ScoreCalculator() {
  const [scores, setScores] = useState<Record<string, number>>({
    Respond: 0,
    'Follow Up': 0,
    'Show Up': 0,
    Ask: 0,
  });

  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);

  const handleScoreChange = (category: string, value: string) => {
    const numValue = Math.min(10, Math.max(0, parseInt(value) || 0));
    setScores({ ...scores, [category]: numValue });
  };

  const getResultMessage = () => {
    if (total === 0) return { icon: Calculator, text: 'Enter your scores to see your results', color: 'text-gray-600' };
    if (total < 32) return { icon: TrendingDown, text: 'Real money being left on the table', color: 'text-red-600' };
    if (total >= 36) return { icon: TrendingUp, text: "You're ahead of most of the market!", color: 'text-green-600' };
    return { icon: Minus, text: "You're in the middle of the pack", color: 'text-orange-600' };
  };

  const result = getResultMessage();
  const ResultIcon = result.icon;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Score Yourself</h2>
          <p className="text-xl text-gray-600">
            Use your last 10 leads. For each category below, give yourself a point for every lead where you hit the standard.
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl p-8 mb-8">
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category.name} className="bg-white rounded-lg p-6 border-2 border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="grid md:grid-cols-3 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-sm text-gray-600">{category.standard}</p>
                  </div>
                  <div className="flex items-center gap-3 justify-end">
                    <input
                      type="number"
                      min={0}
                      max={10}
                      value={scores[category.name] || ''}
                      onChange={(e) => handleScoreChange(category.name, e.target.value)}
                      className={`w-20 px-3 py-2 border-2 ${colorClasses[category.color]} rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 transition-all`}
                      placeholder="0"
                    />
                    <span className="text-gray-500 font-medium">/ 10</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total score */}
          <div className="mt-8 pt-8 border-t-2 border-gray-300">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Total Score</h3>
                <div className={`flex items-center gap-2 mt-2 ${result.color}`}>
                  <ResultIcon className="w-5 h-5" />
                  <p className="font-semibold">{result.text}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-indigo-600">{total}</div>
                <div className="text-gray-500 font-medium">out of 40</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark info */}
        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            <strong className="text-indigo-700">Below 32:</strong> Real money being left on the table. •
            <strong className="text-indigo-700"> Above 36:</strong> You&apos;re ahead of most of the market.
          </p>
        </div>
      </div>
    </section>
  );
}
