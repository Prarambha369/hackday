# HackDay Butwal

Website for **HackDay Butwal**, a one-day, beginner-friendly student hackathon run by
[Butwal Hacks](https://www.butwalhacks.com) with Major League Hacking and Google Gemini.
It took place on **January 17, 2026** at Lumbini World School, Tilottama, Nepal. The site is
now an archive of the event: theme, prizes and winners, judges, sponsors and team.

- Live: https://hackday.butwalhacks.com
- Devpost (projects and winners): https://butwal.devpost.com
- MLH listing: https://events.mlh.io/events/13395-hackday-butwal
- Upcoming Butwal Hacks events: https://www.butwalhacks.com/events

## Stack

Vite, React 18, TypeScript, Tailwind CSS, a few shadcn/ui components, React Router and
next-themes (light/dark mode). An optional Supabase Edge Function powers the chat assistant.
Hosted on Vercel.

## Getting started

```sh
npm install
npm run dev         # http://localhost:8080
npm run typecheck
npm run lint
npm run build       # production build in dist/
```

### Environment variables (optional)

Put these in `.env.local` (git-ignored). Without them the site works normally and the chat
widget is simply hidden.

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL for the chat assistant |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable (anon) key |

On Vercel, set them under **Project → Settings → Environment Variables** and redeploy.

## Editing content

All event content lives in `src/data/`. Components read from these files, so most edits
never touch a component.

| File | What it holds |
| --- | --- |
| `event.ts` | Name, theme, date, times, venue, links, contact emails |
| `prizes.ts` | Prize pool, podium, special prizes, winners (from Devpost) |
| `judging.ts` | Judges and judging criteria |
| `sponsors.ts` | Sponsors, their tier and role |

**Sponsors.** Tiers set the logo size, largest first: Main Event Partners, Title, Gold,
Silver, Bronze, Partners, Community Partners. To add one, put a square logo in `public/sponsors/`
(trim the white space so it fills the circle, about 400×400) and add an entry with its `tier`.

**Event details.** After changing `event.ts`, also update the JSON-LD block and meta
descriptions in `index.html`, and the system prompt in `supabase/functions/chat/index.ts`.

## Project structure

```
index.html              Meta tags, JSON-LD, no-flash dark-mode script
public/
  sponsors/             Sponsor logos (kebab-case file names)
  og-image.png          Social share image (1200×630)
  robots.txt, sitemap.xml, favicon.*
src/
  data/                 Event content (see above)
  components/           Page sections: Hero, About, Schedule, Challenges (prizes),
                        Judges, Sponsors, Team, Community, FAQ, Footer, Chatbot,
                        Navbar, ThemeToggle
  components/ui/        shadcn/ui primitives in use (button, card, accordion, input,
                        toast, sonner, tooltip)
  pages/                Routes: Index (/), CodeOfConduct (/cod), NotFound
  integrations/supabase Supabase client (null when env vars are missing)
  assets/               Bundled logos
supabase/
  functions/chat/       Edge Function for the chat assistant (origin allow-list,
                        64 KB body cap, input sanitising)
  migrations/           Database migrations
vercel.json             SPA rewrite so deep links like /cod work
```

## Deploying the chat function

```sh
supabase db push                 # applies migrations, including the registrations lock-down
supabase functions deploy chat   # needs LOVABLE_API_KEY set as a function secret
```

## License

MIT. See [LICENSE](LICENSE).
