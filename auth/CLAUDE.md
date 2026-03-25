# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
npx prisma migrate dev     # Apply DB migrations
npx prisma generate        # Regenerate Prisma client after schema changes
npx prisma studio          # Open Prisma Studio GUI
```

No test runner is configured yet.

## Stack

- **Next.js 16.2.1** (App Router) — see AGENTS.md warning about breaking changes
- **React 19.2.4**
- **NextAuth v4** (`next-auth`) + `@auth/core` + `@auth/prisma-adapter`
- **Prisma 7** — ORM; schema lives in `prisma/schema.prisma`
- **Zod 4** — runtime validation
- **Tailwind CSS v4** — configured via PostCSS (`@tailwindcss/postcss`), not a `tailwind.config.*` file
- **TypeScript** — strict mode, path alias `@/*` maps to project root

## Architecture

This is an **authentication-focused Next.js app**. The intended structure:

- `app/` — App Router pages and layouts
- `app/api/auth/[...nextauth]/` — NextAuth route handler (to be created)
- `prisma/schema.prisma` — Database schema (to be created); `@auth/prisma-adapter` expects NextAuth's standard User/Account/Session/VerificationToken models
- Environment: requires `DATABASE_URL` and `NEXTAUTH_SECRET` in `.env.local`

## Key Notes

- Tailwind v4 uses CSS-first config in `app/globals.css` (no `tailwind.config.js`)
- Before implementing any auth feature, check `node_modules/next/dist/docs/` for current API — this Next.js version has breaking changes from prior releases
- `@auth/core` and `next-auth` v4 co-exist; prefer the NextAuth v4 API (`next-auth`) for route handlers and session management unless docs indicate otherwise