# PropIntel Landing (Next.js + Tailwind) — v2

Live-ready landing page with:
- Formspree integration (via env var `NEXT_PUBLIC_FORMSPREE_ENDPOINT`)
- Founders' Note section
- Brand colors & logo

## Quick Start
```bash
pnpm i   # or npm i / yarn
cp .env.example .env.local    # add your Formspree endpoint
pnpm dev  # http://localhost:3000
```

## Deploy (Vercel)
1) Push repo to GitHub
2) Import into Vercel
3) Add env var: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
4) Deploy + connect your domain

## Formspree
- Create a form at https://formspree.io
- Copy your endpoint (looks like: https://formspree.io/f/abcde123)
- Set it in `.env.local` as `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

## Files you can use now
- content/FoundersNote.md — copy used on the site
- content/InvestorIntroEmail.txt — email template for outreach
- content/PilotSurvey.md — paste into Google Forms
