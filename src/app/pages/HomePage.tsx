import SchemaScript from '../components/SchemaScript';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Industries } from '../components/Industries';
import { Differentiation } from '../components/Differentiation';
import { Team } from '../components/Team';
import { CTA } from '../components/CTA';
import { AnimatedSection } from '../components/AnimatedSection';

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'My Task Labs',
  url: 'https://www.mytasklabs.us',
  image: 'https://www.mytasklabs.us/images/og-image.jpg',
  logo: 'https://www.mytasklabs.us/favicon.svg',
  priceRange: '$249 - $799',
  description:
    'AI automation consulting helping businesses streamline workflows, convert more leads, and scale efficiently through intelligent automation solutions.',
  telephone: '+15034510341',
  email: 'contact@mytasklabs.us',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Portland',
    addressRegion: 'OR',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  founder: {
    '@type': 'Person',
    name: 'Adria Mooney',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Automation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Workflow Audit',
          url: 'https://www.mytasklabs.us/ai-workflow-audit',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lead Conversion Automation',
          url: 'https://www.mytasklabs.us/lead-automation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Team Coordination Tools',
          url: 'https://www.mytasklabs.us/team-coordination',
        },
      },
    ],
  },
};

export function HomePage() {
  return (
    <>
      <SchemaScript schema={homepageSchema} />
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
