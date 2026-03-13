import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Industries } from '../components/Industries';
import { Differentiation } from '../components/Differentiation';
import { Team } from '../components/Team';
import { CTA } from '../components/CTA';
import { AnimatedSection } from '../components/AnimatedSection';

export function HomePage() {
  return (
    <>
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection><Services /></AnimatedSection>
      <AnimatedSection><Process /></AnimatedSection>
      <AnimatedSection><Industries /></AnimatedSection>
      <AnimatedSection><Differentiation /></AnimatedSection>
      <AnimatedSection><Team /></AnimatedSection>
      <AnimatedSection><CTA /></AnimatedSection>
    </>
  );
}
