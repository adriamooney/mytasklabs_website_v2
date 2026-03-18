import { SalesHero } from '../components/sales/SalesHero';
import { ProblemSection } from '../components/sales/ProblemSection';
import { FourPartSystem } from '../components/sales/FourPartSystem';
import { ScoreCalculator } from '../components/sales/ScoreCalculator';
import { CaseStudy } from '../components/sales/CaseStudy';
import { SalesCTA } from '../components/sales/SalesCTA';

export function BookedAndBusyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SalesHero />
      <ProblemSection />
      <FourPartSystem />
      <ScoreCalculator />
      <CaseStudy />
      <SalesCTA />
    </div>
  );
}
