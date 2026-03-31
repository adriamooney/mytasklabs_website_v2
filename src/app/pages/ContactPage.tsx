import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Link } from 'react-router';

export function ContactPage() {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const apiBase = import.meta.env.VITE_API_URL ?? '';

    try {
      const base = apiBase.replace(/\/$/, '');
      const res = await fetch(`${base}/api/submit-contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName,
          email,
          phone,
          message,
          smsOptIn,
        }),
      });
      const rawText = await res.text();
      let parsed: { error?: string; ok?: boolean } = {};
      if (rawText) {
        try {
          parsed = JSON.parse(rawText) as { error?: string; ok?: boolean };
        } catch {
          /* non-JSON body (e.g. HTML from Vite when /api is not implemented) */
        }
      }
      if (!res.ok) {
        const hint =
          res.status === 404 || rawText.trim().startsWith('<')
            ? ' Contact API not found. Use npx vercel dev (not only npm run dev), or deploy and test on your live site.'
            : '';
        throw new Error((parsed.error ?? `Request failed (${res.status}).`) + hint);
      }
      // Vite dev can return 200 + HTML for unknown paths; require explicit API success shape
      if (parsed.ok !== true) {
        throw new Error(
          parsed.error ??
            'Contact API did not respond correctly. If you are on localhost with npm run dev, run npx vercel dev instead, or test on your deployed site.',
        );
      }
      setStatus('success');
      setBusinessName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSmsOptIn(false);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message.');
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Tell us about your business and how we can help automate your workflows.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="business-name">Business Name</Label>
              <Input
                id="business-name"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
                placeholder="Your company name"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="How can we help?"
                rows={5}
                className="mt-2"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="sms-consent"
                name="sms-opt-in"
                checked={smsOptIn}
                onChange={(e) => setSmsOptIn(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border border-gray-300 text-indigo-600 accent-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              />
              <label
                htmlFor="sms-consent"
                className="text-sm text-gray-600 font-normal cursor-pointer leading-relaxed"
              >
                <span className="text-gray-500">Optional. </span>
                I agree to receive SMS messages from My Task Labs related to my inquiry. Message &amp; data rates
                may apply. Reply STOP to unsubscribe. Message frequency varies. Reply HELP for help. Your mobile
                information will not be sold or shared with third parties for promotional or marketing purposes.
                View our{' '}
                <Link to="/privacy" className="text-indigo-600 hover:text-indigo-700 underline inline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/terms" className="text-indigo-600 hover:text-indigo-700 underline inline">
                  Terms of Service
                </Link>
                .
              </label>
            </div>

            {status === 'success' && (
              <div className="p-4 rounded-lg bg-green-50 text-green-800 text-sm">
                Thank you! Your message has been sent. We&apos;ll be in touch soon.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-lg bg-red-50 text-red-800 text-sm">
                {errorMessage}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === 'sending'}
              className="w-full sm:w-auto cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700 hover:text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
