# Custom Plan Feature — Setup Guide

This guide covers environment variables, Monday.com configuration, and EmailJS templates for the custom plan flow.

---

## Environment Variables

Add these to your Vercel project (Settings → Environment Variables) and to `.env.local` for local development with `vercel dev`.

### Required

| Variable | Description |
|---------|-------------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key for Claude AI personalization |

### Optional — Monday.com

| Variable | Description |
|---------|-------------|
| `MONDAY_API_TOKEN` | Monday.com API token. If set, creates a board item with quiz answers and plan. |
| `MONDAY_BOARD_ID` | Board ID where leads will be created |
| `MONDAY_GROUP_ID` | Group ID within the board (default: `topics`) |
| `MONDAY_COLUMN_EMAIL` | Column ID for the email field |
| `MONDAY_COLUMN_LEAD_DATA` | Column ID for the lead data (quiz answers, plan, scores as JSON) |

**How to get a Monday token:**
1. In Monday.com: Click your profile → Develop (or Admin → API) → API token
2. Or: Developer Center → API → Personal API token → Show
3. Copy the token and add it to your env vars

**How to get board ID and column IDs:**
1. Open your board in Monday.com
2. Board ID: Look at the URL — `https://xxx.monday.com/boards/1234567890` → board ID is `1234567890`
3. Group ID: Usually `topics` (the default first group) or find it via the API
4. Column IDs: Run this in the Monday API playground (https://api.monday.com/playground) or via curl:
   ```graphql
   query { boards(ids: [YOUR_BOARD_ID]) { groups { id title } columns { id title type } } }
   ```
   Use the returned column `id` values (e.g. `email`, `text_abc123`) for `MONDAY_COLUMN_EMAIL` and `MONDAY_COLUMN_LEAD_DATA`

### Optional — Plan Email (EmailJS)

| Variable | Description |
|---------|-------------|
| `EMAILJS_QUIZ_SERVICE_ID` | EmailJS service ID for plan delivery emails |
| `EMAILJS_QUIZ_TEMPLATE_ID` | EmailJS template ID for the plan email |
| `EMAILJS_QUIZ_PUBLIC_KEY` | EmailJS public key (user ID) |
| `EMAILJS_QUIZ_PRIVATE_KEY` | EmailJS private key (access token). Required for strict mode / server-side. |

If these are not set, the plan will still be shown on the `/your-plan` page; the email will simply be skipped.

---

## Monday.com Board Setup

Create a board (e.g. "Custom Plan Leads") with these columns:

| Column Type | Title | Used for |
|-------------|-------|----------|
| Text | Email | Lead's email address |
| Long text | Lead Data | Concise summary: plan type, scores, step titles, 60-day target |

The item name will be set to `Custom Plan - {email}` for easy identification. Copy the column IDs from the API query above into your env vars.

---

## EmailJS — Enable Server-Side Access

**Important:** The plan email is sent from the server (Vercel). EmailJS strict mode requires a private key.

1. Go to https://dashboard.emailjs.com/admin/account/security
2. Enable **"Allow EmailJS API for non-browser applications"**
3. Get your **Private Key** (access token) from https://dashboard.emailjs.com/admin/account — add it as `EMAILJS_QUIZ_PRIVATE_KEY` in your env vars

Without the private key in strict mode, you'll get a `403 API access in strict mode, but no Private Key was provided` error.

---

## EmailJS Plan Template

To email the plan to users, create an EmailJS template with these variables:

- `{{to_email}}` — recipient email (use in To field)
- `{{plan_content}}` — formatted plain-text plan (scores, steps, 60-day target)
- `{{plan_type}}` — e.g. "Your Respond Plan" (use in Subject)

**Note:** The plan is sent as plain text (not HTML) to ensure it displays correctly in Gmail and other clients. Use `{{plan_content}}` with double braces in your template body.

Set `EMAILJS_QUIZ_SERVICE_ID`, `EMAILJS_QUIZ_TEMPLATE_ID`, and `EMAILJS_QUIZ_PUBLIC_KEY` in your env.

**Enable server-side API access:** Plan emails are sent from your Vercel server (Node.js), not the browser. Go to [EmailJS Account Security](https://dashboard.emailjs.com/admin/account/security) and enable **"Allow EmailJS API for non-browser applications"**. Without this, you’ll get a 403 error.

---

## Local Development

Run `vercel dev` (not `vite`) so both the SPA and API routes are served:

```bash
npx vercel dev
```

This runs the app and `/api/submit-plan` on the same origin. If you use `npm run dev` (Vite only), the API will not be available unless you proxy or use a separate backend.

---

## Flow Summary

1. User completes quiz at `/custom-plan` and clicks "Send Me My Custom Plan"
2. Frontend POSTs to `/api/submit-plan` with `{ email, answers, anythingElse }`
3. API: routes by Q10/Q11 → calculates scores → calls Claude for each step → creates Monday.com board item → sends plan email (if configured)
4. API returns plan data; frontend stores in `sessionStorage` and redirects to `/your-plan`
5. User sees personalized plan on `/your-plan`; plan is also sent to their email (if EmailJS is configured)

---

## LocalLift — Free Website Design (`/local-lift/free-design`)

The form POSTs to **`/api/submit-free-design`** (same Vercel deployment pattern as `/api/submit-plan`).

### What the API does

1. **Monday.com** — Creates one item using the **same** env vars as the custom plan flow (`MONDAY_API_TOKEN`, `MONDAY_BOARD_ID`, `MONDAY_GROUP_ID`, `MONDAY_COLUMN_EMAIL`, `MONDAY_COLUMN_LEAD_DATA`). Item name: `LocalLift Design — {Business Name}`. The lead’s email goes in the email column; **full form text** goes in the long-text lead column.

2. **Resend (admin)** — Sends **you** a plain-text notification via [Resend](https://resend.com). Quiz (`/api/submit-plan`) and Contact still use **EmailJS** only.

### Environment variables (Vercel + `.env.local` for `vercel dev`)

| Variable | Required? | Description |
|----------|-------------|-------------|
| `MONDAY_API_TOKEN` | Monday | Same as custom plan |
| `MONDAY_BOARD_ID` | Monday | Same board or a dedicated board |
| `MONDAY_GROUP_ID` | Optional | Default `topics` |
| `MONDAY_COLUMN_EMAIL` | Monday | Column ID for the submitter’s email |
| `MONDAY_COLUMN_LEAD_DATA` | Monday | Long text column for the full submission payload |
| `RESEND_API_KEY` | Resend | API key from Resend dashboard |
| `RESEND_FROM` | Resend | Sender **exactly** as `you@domain.com` or `LocalLift <you@domain.com>` — no extra wrapping quotes in Vercel; if you use a display name, the address must be inside `<` `>` (must be allowed by Resend — verified domain or `onboarding@resend.dev` for testing) |
| `LOCALIFT_NOTIFY_EMAIL` | Resend | Your inbox(es); comma-separated for multiple |

If Monday vars are missing, the API still returns success but **skips** Monday. If Resend vars are missing, the notification email is **skipped**.

### Resend setup

1. Create an account at [resend.com](https://resend.com), add an API key → `RESEND_API_KEY`.
2. **From:** Verify a domain in Resend (DNS records) and use `RESEND_FROM` in the form `Name <you@yourdomain.com>`, or use Resend’s test sender while evaluating (see their docs for `onboarding@resend.dev` limits).
3. **To:** Set `LOCALIFT_NOTIFY_EMAIL` to the address(es) that should receive each submission.
4. The email **Reply-To** is set to the submitter’s address so you can reply directly.

### Local development

Use **`npx vercel dev`** so `/api/submit-free-design` is available on the same origin as the SPA. Plain `npm run dev` (Vite only) will not hit the API unless you proxy.

### Flow summary

1. User completes `/local-lift/free-design` and submits.
2. Frontend POSTs JSON to `/api/submit-free-design`.
3. API writes to Monday (if configured) and sends the admin email via **Resend** (if configured).
4. On success, the thank-you screen is shown (no `mailto:`).
