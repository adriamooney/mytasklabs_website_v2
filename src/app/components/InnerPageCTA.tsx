import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface InnerPageCTAProps {
  title: string;
  description: string;
  buttonText?: string;
}

export function InnerPageCTA({ title, description, buttonText = 'Schedule Consultation' }: InnerPageCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>
        <a
          href="https://zcal.co/adriamooney/15min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" variant="secondary">
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
}
