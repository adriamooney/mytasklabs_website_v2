import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Link } from 'react-router';

export function ContactPage() {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      setStatus('error');
      setErrorMessage('Email service is not configured. Please add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to your .env.local file.');
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, {
        business_name: businessName,
        email,
        phone,
        message,
      });
      setStatus('success');
      setBusinessName('');
      setEmail('');
      setPhone('');
      setMessage('');
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
                required
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
              <Checkbox
                id="sms-consent"
                checked
                disabled
                className="mt-0.5 shrink-0"
              />
              <label
                htmlFor="sms-consent"
                className="text-sm text-gray-600 font-normal cursor-default leading-relaxed"
              >
                I agree to receive SMS messages from My Task Labs related to my inquiry. Message &amp; data rates may apply. Reply STOP to unsubscribe. View our <Link to="/privacy" className="text-indigo-600 hover:text-indigo-700 underline inline">Privacy Policy</Link> and <Link to="/terms" className="text-indigo-600 hover:text-indigo-700 underline inline">Terms of Service</Link>.
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
              variant="secondary"
              size="lg"
              disabled={status === 'sending'}
              className="w-full sm:w-auto cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
