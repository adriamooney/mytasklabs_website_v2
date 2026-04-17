const TOOL_LOGOS: { name: string; src: string }[] = [
  {
    name: 'Zapier',
    src: 'https://cdn.brandfetch.io/domain/zapier.com/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'Make',
    src: 'https://cdn.brandfetch.io/domain/make.com/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'Claude',
    src: 'https://cdn.brandfetch.io/domain/claude.ai/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'Apigee',
    src: 'https://cdn.brandfetch.io/domain/apigee.com/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'Cartesia',
    src: 'https://cdn.brandfetch.io/domain/cartesia.ai/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'Telnyx',
    src: 'https://cdn.brandfetch.io/domain/telnyx.com/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'Next.js',
    src: 'https://cdn.brandfetch.io/domain/nextjs.org/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'HubSpot',
    src: 'https://cdn.brandfetch.io/domain/hubspot.com/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'Monday.com',
    src: 'https://cdn.brandfetch.io/domain/monday.com/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'Resend',
    src: 'https://cdn.brandfetch.io/domain/resend.com/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'Airtable',
    src: 'https://cdn.brandfetch.io/domain/airtable.com/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
  {
    name: 'Salesforce',
    src: 'https://cdn.brandfetch.io/domain/salesforce.com/w/400/h/400?c=1id0HB--ybt3yAE28lp',
  },
];

export function ToolsWeWorkWith() {
  return (
    <section className="py-24 bg-white border-t border-gray-200" aria-labelledby="tools-we-work-with-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="tools-we-work-with-heading" className="text-4xl font-bold text-gray-900 mb-4">
            Some of the tools we work with
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We integrate and build on the platforms your team already uses—or help you adopt the right stack.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10 md:gap-x-12 md:gap-y-12">
          {TOOL_LOGOS.map(({ name, src }) => (
            <div key={name} className="flex h-12 w-[min(100%,140px)] items-center justify-center">
              <img
                src={src}
                alt={name}
                width={120}
                height={48}
                className="max-h-10 w-auto max-w-[120px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
