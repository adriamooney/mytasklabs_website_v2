import Link from 'next/link';
import { Check, Cpu, Layers, MapPin, Sparkles } from 'lucide-react';
import { InnerPageCTA } from '../components/InnerPageCTA';
import { TEAM_MEMBERS } from '../components/Team';

const focusAreas = [
  {
    title: 'Workflow & operations',
    description:
      'We map how work really moves through your business—then automate the repetitive parts so your team spends time on customers, not copy-paste.',
    href: '/ai-workflow-audit',
    linkLabel: 'AI Workflow Audit',
  },
  {
    title: 'Leads & revenue',
    description:
      'Faster follow-up, cleaner handoffs, and automation that keeps prospects from going cold. Built around the tools you already use.',
    href: '/lead-automation',
    linkLabel: 'Lead Automation',
  },
  {
    title: 'Team coordination',
    description:
      'Calendars, assignments, and notifications that stay in sync—so nothing depends on one person remembering to forward an email.',
    href: '/team-coordination',
    linkLabel: 'Team Coordination',
  },
  {
    title: 'Visibility & reporting',
    description:
      'Dashboards and pipelines that reflect reality, not spreadsheets from last week—so you can decide with confidence.',
    href: '/analytics',
    linkLabel: 'Analytics',
  },
] as const;

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-white/5 blur-2xl"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-indigo-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">About</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold mb-4">About My Task Labs</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            We help growing businesses use AI and automation where it actually matters—so you can streamline workflows,
            convert more leads, and scale without drowning in busywork.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-indigo-200" aria-hidden />
              Portland, Oregon
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-indigo-200" aria-hidden />
              10+ years in tech &amp; AI
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur-sm">
              <Layers className="h-4 w-4 text-indigo-200" aria-hidden />
              Custom systems, not templates
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who we are</h2>
            <p className="text-xl text-gray-600">
              My Task Labs is an AI automation consulting practice based in{' '}
              <span className="text-gray-900 font-medium">Portland, Oregon</span>. We work with service businesses,
              professional firms, and operations teams that are ready to modernize—but don&apos;t want a generic
              one-size-fits-all toolkit dropped on their desk.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Too many companies buy software and never connect it. We take the opposite approach: we start with your
                real processes, your real constraints, and your real stack. Then we design automation that fits—whether
                that&apos;s integrating CRM and scheduling, building lead nurture flows, or standing up reporting that
                your whole leadership team can trust.
              </p>
              <p>
                We&apos;re not here to chase buzzwords. We&apos;re here to save you time, reduce errors, and help you grow
                without hiring another full-time person just to push data between systems.
              </p>
            </div>
            <div className="rounded-xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/80 to-white p-8 shadow-sm transition-shadow hover:shadow-md hover:border-indigo-300">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-4">What we bring</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    <Cpu className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Systems &amp; integrations</p>
                    <p className="text-sm text-gray-600">CRM, scheduling, ops tools—connected and automated.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    <Sparkles className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">AI &amp; machine learning</p>
                    <p className="text-sm text-gray-600">Practical ML—reliable in production, not just impressive in demos.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    <Layers className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">End-to-end workflows</p>
                    <p className="text-sm text-gray-600">From first lead touch to reporting—fewer handoffs, fewer errors.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-3">Meet the team</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our team</h2>
            <p className="text-xl text-gray-600">
              Depth of experience, practical judgment, and a bias toward shipping what actually works.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 flex justify-center overflow-hidden rounded-full w-32 h-32 mx-auto transition-transform duration-500 group-hover:scale-105">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1 text-center transition-colors duration-300 group-hover:text-indigo-600">
                  {member.name}
                </h3>
                <p className="text-indigo-600 text-sm font-medium mb-4 text-center">{member.title}</p>
                <p className="text-gray-600 text-center text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p>
              We bring <span className="text-gray-900 font-medium">more than a decade of experience</span> across
              technology, business systems, machine learning, and AI—not as buzzwords on a slide, but as tools we&apos;ve
              used to design, integrate, and troubleshoot real workflows in the wild.
            </p>
            <p>
              That background means we can move quickly without cutting corners: we know how to scope a problem, pick
              the right approach, and deliver solutions that hold up when volume spikes or your stack changes.
            </p>
            <p>
              We&apos;ve also <span className="text-gray-900 font-medium">run our own businesses</span>, so we get the
              pressure of payroll, cash flow, and growth targets. We know what it feels like when a lead goes cold or a
              process breaks at the worst moment—and we build automation with that reality in mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How we work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every engagement follows a clear path: understand first, then design, implement, and refine. No black
              boxes—you stay in the loop at each step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              'We map workflows before we recommend tools.',
              'Solutions are tailored to your stack—not a template we resell.',
              'Rollouts are phased so you can validate before we scale.',
              'You get documentation and training so your team can own what we build.',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-5 transition-all hover:border-indigo-300 hover:bg-white hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  <Check className="h-4 w-4 text-indigo-600" aria-hidden />
                </span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/process"
              className="text-indigo-600 hover:text-indigo-700 font-medium underline-offset-4 hover:underline"
            >
              See our full process →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What we focus on</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From audits to implementation, we stay focused on outcomes: fewer manual steps, better lead response, and
              clearer visibility into your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map(({ title, description, href, linkLabel }) => (
              <div
                key={title}
                className="p-6 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
                <Link href={href} className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                  {linkLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Products</h2>
              <p className="text-xl text-gray-600">
                Beyond consulting, we build focused products for specific industries—starting with local service
                businesses that need visibility, automation, and booked jobs in one system.
              </p>
            </div>
            <div className="bg-white rounded-xl border-2 border-indigo-200 p-8 md:p-10 text-center shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">LocalLift</h3>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-xl mx-auto">
                Websites, AI search visibility, automated lead response, and more—packaged for contractors, haulers,
                cleaners, and other local pros who live on their phones and can&apos;t afford to miss a text.
              </p>
              <Link
                href="/local-lift"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-6 py-3 text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Explore LocalLift
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>
            My Task Labs, LLC is registered at 8 The Green, Suite B, Dover, DE 19901. Day-to-day operations are run from
            Portland, OR. Questions?{' '}
            <a href="mailto:contact@mytasklabs.us" className="text-indigo-600 hover:text-indigo-700">
              contact@mytasklabs.us
            </a>{' '}
            ·{' '}
            <a href="tel:+15034510341" className="text-indigo-600 hover:text-indigo-700">
              503.451.0341
            </a>
          </p>
        </div>
      </section>

      <InnerPageCTA
        title="Tell us what you're trying to fix"
        description="Book a short call. We'll listen to your goals, ask a few questions about your workflows, and point you in the right direction—with no pressure."
        buttonText="Schedule a consultation"
      />
    </>
  );
}
