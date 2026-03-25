# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```

**Database (Prisma v7 with libSQL adapter):**
```bash
npx prisma migrate dev   # Run migrations
npx prisma studio        # Open DB browser
```

## Architecture

This is a **Next.js 16 App Router** CRUD app for managing code snippets. The stack is Next.js + React 19 + Prisma 7 (libSQL/SQLite) + Tailwind CSS v4 + Monaco Editor.

**Data model:** Single `Snippet` table with `id`, `title`, `code` fields (`prisma/schema.prisma`). Database is a local SQLite file (`dev.db`).

**Key architectural patterns:**

- **Server Actions** (`actions/index.ts`) — all mutations (`createSnippet`, `editSnippet`, `deleteSnippet`) are Server Actions marked `"use server"`. They call Prisma directly and use `redirect()` for navigation after mutations.
- **DB client** (`db/index.ts`) — uses `PrismaLibSql` adapter (not the default Prisma client) with a hardcoded `file:./dev.db` URL. The Prisma-generated client is at `@/app/generated/prisma/client`, not the default `@prisma/client`.
- **Page components** are async Server Components that fetch from the DB directly. The `params` prop is a `Promise<{...}>` and must be awaited (`await props.params`).
- **Client components** (`components/snippet-edit-form.tsx`, `app/snippet/new/page.tsx`) are marked `"use client"` and use `useActionState` (React 19) to wire Server Actions to forms.
- **Route structure:** `/` list, `/snippet/new` create, `/snippet/[id]` show, `/snippet/[id]/edit` edit. Each dynamic route has a co-located `loading.tsx` and `not-found.tsx`.

**Important:** `createSnippet` in `actions/index.ts` is currently stubbed (returns early with an error message). The actual DB insert logic is commented out.