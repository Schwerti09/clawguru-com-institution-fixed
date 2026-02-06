# ClawGuru – Institution Edition (Vercel + Netlify)

**Next.js 14.2.21** pinned (Netlify CVE gate safe), React 18.2.

## Run locally
```bash
npm install
npm run dev
```

## Deploy
### Vercel
Import the repo → default Next settings.

### Netlify
- Build: `npm run build`
- Publish: `.next`
- Plugin: `@netlify/plugin-nextjs` (configured in `netlify.toml`)

## Optional: LLM Mode (Copilot)
Set env vars:
- `OPENAI_API_KEY` (required)
- `OPENAI_BASE_URL` (optional; OpenAI-compatible)
- `OPENAI_MODEL` (optional; default: gpt-4o-mini)

If no key is set, Copilot works rule-based.

## What’s inside (the “conversation monster” part)
- `/copilot` full chat UI + followups + actions
- `/intel` curated incident feed + filters
- `/academy` 30-minute hardening sprint with progress (localStorage)
- `/vault` knowledge base + search
- Tools + Runbook + Pillar Page

No accounts. No dark patterns. High retention through real utility.
