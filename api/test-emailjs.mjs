#!/usr/bin/env node
/**
 * Test script for EmailJS plan email configuration.
 * Run from project root: node --env-file=.env.local api/test-emailjs.mjs
 * Or: node api/test-emailjs.mjs (after loading .env.local)
 */

import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Load .env.local if exists
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, '..', '.env.local');
if (existsSync(envPath)) {
  const env = readFileSync(envPath, 'utf8');
  for (const line of env.split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const val = match[2].trim().replace(/^["']|["']$/g, '');
      process.env[key] = val;
    }
  }
}

const serviceId = process.env.EMAILJS_QUIZ_SERVICE_ID;
const templateId = process.env.EMAILJS_QUIZ_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_QUIZ_PUBLIC_KEY;
const privateKey = process.env.EMAILJS_QUIZ_PRIVATE_KEY;

console.log('=== EmailJS Config Test ===\n');
console.log('Values loaded:');
console.log('  EMAILJS_QUIZ_SERVICE_ID:', serviceId ? `${serviceId.slice(0, 12)}...` : '(missing)');
console.log('  EMAILJS_QUIZ_TEMPLATE_ID:', templateId ? `"${templateId}"` : '(missing)');
console.log('  EMAILJS_QUIZ_PUBLIC_KEY:', publicKey ? `${publicKey.slice(0, 10)}...` : '(missing)');
console.log('  EMAILJS_QUIZ_PRIVATE_KEY:', privateKey ? `present (${privateKey.length} chars)` : '(missing)');
console.log('');

if (!serviceId || !templateId || !publicKey || !privateKey) {
  console.error('Error: Missing one or more required env vars. Check .env.local');
  process.exit(1);
}

// Test 1: Direct REST API call (same as our code)
console.log('Sending test email via REST API...\n');
const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    accessToken: privateKey,
    template_params: {
      to_email: 'test@example.com',
      plan_content: '<p>Test plan content</p>',
      plan_type: 'Test Plan',
    },
  }),
});

const text = await res.text();
console.log('Response status:', res.status);
console.log('Response body:', text);
console.log('');

if (!res.ok) {
  console.error('FAIL with plan config (service_w0htmbl + template_d9lymrc).');
  console.log('');
  const contactService = process.env.VITE_EMAILJS_SERVICE_ID;
  const contactTemplate = process.env.VITE_EMAILJS_TEMPLATE_ID;
  if (contactService && contactTemplate) {
    console.log('Test A: Plan template with contact service (service_jtibkeo + template_d9lymrc)...');
    const resA = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: contactService,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: { to_email: 'test@example.com', plan_content: '<p>Test</p>', plan_type: 'Test' },
      }),
    });
    console.log('  Result:', resA.status, await resA.text());
    console.log('');
    console.log('Test B: Contact template (service_jtibkeo + template_e6y7o0r)...');
    const resB = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: contactService,
        template_id: contactTemplate,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: { business_name: 'Test', email: 'test@example.com', phone: '555-0000', message: 'Test' },
      }),
    });
    console.log('  Result:', resB.status, await resB.text());
    if (resA.ok) {
      console.log('');
      console.log('>>> FIX: Use service_jtibkeo for plan emails! Set EMAILJS_QUIZ_SERVICE_ID=service_jtibkeo');
    } else if (resB.ok) {
      console.log('');
      console.log('>>> Plan template is NOT in service_jtibkeo. Create a NEW plan template in');
      console.log('>>> service_jtibkeo (same as contact form) and use that template ID.');
    }
  }
  process.exit(1);
}

console.log('SUCCESS: EmailJS accepted the request.');
