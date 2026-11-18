# HackDay Butwal

Website for **HackDay Butwal**, a Major League Hacking (MLH) student hackathon organized by
[Butwal Hacks](https://www.butwalhacks.com) at Lumbini World School, Butwal, Nepal.

- Live: https://hackday.butwalhacks.com (also https://hackday-navy.vercel.app)
- MLH listing: https://events.mlh.io/events/13395-hackday-butwal
- Devpost: https://butwal.devpost.com

## Stack

Vite + React 18 + TypeScript, Tailwind CSS, shadcn/ui, React Router. An optional Supabase
Edge Function powers the chat assistant. Deployed on Vercel.

## Getting started

```sh
npm install
npm run dev        # http://localhost:8080
npm run build      # production build → dist/
npm run lint
```

### Environment variables (optional)

Copy them into `.env.local` (git-ignored). Without them the site still works; only the chat
widget is hidden.

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL for the chat assistant |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable (anon) key |

On Vercel, set these under **Project → Settings → Environment Variables**, then redeploy.

## Project structure

```
public/
  og-image.png         Social share image (1200×630)
  sponsors/            Sponsor logos (one file per sponsor, kebab-case names)
  favicon.png, robots.txt, sitemap.xml
src/
  data/
    event.ts           Event name, date, times, venue, links, contacts. Edit this first.
    sponsors.ts        Sponsor list (name, role, logo path)
  components/          Page sections (Hero, About, Schedule, Sponsors, Team, FAQ, ...)
  components/ui/       shadcn/ui primitives (generated; avoid hand-editing)
  pages/               Routes: Index (/), CodeOfConduct (/cod), NotFound
  integrations/supabase/  Supabase client (null when env vars are missing)
  assets/              Bundled images (hackday-logo.png, butwal-hacks-mark.png)
supabase/
  functions/chat/      Edge Function for the chat assistant
  migrations/          Database migrations
vercel.json            SPA rewrite so deep links like /cod don't 404
```

## Common edits

- **Change event details:** edit `src/data/event.ts`. Also update the JSON-LD block in `index.html`.
- **Add a sponsor:** put a square logo (500×500 recommended) in `public/sponsors/` and add an
  entry to `src/data/sponsors.ts`. Set `featured: true` to show it larger.

## License

MIT. See [LICENSE](LICENSE).
