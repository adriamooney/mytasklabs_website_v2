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

**Important:** The plan email is sent from the server (Vercel). EmailJS blocks server-side requests by default.

1. Go to https://dashboard.emailjs.com/admin/account/security
2. Enable **"Allow EmailJS API for non-browser applications"**

Without this, you'll get a `403 API access from non-browser environments is currently disabled` error.

---

## EmailJS Plan Template

To email the plan to users, create an EmailJS template with these variables:

- `{{to_email}}` — recipient email
- `{{plan_content}}` — JSON or HTML of the plan (you can format as needed)
- `{{plan_type}}` — e.g. "Your Respond Plan", "Your Follow Up Plan"

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
