# Deploying this app to Vercel (Server / Dashboard + Auth)

This branch (`server-deploy`) is prepared for deploying the full Next.js app (SSR/SSG + API routes, auth, database) to Vercel.

## Required environment variables
- `MONGODB_URI` — MongoDB connection string (production DB).
- `GOOGLE_CLIENT_ID` — Google OAuth client ID (for sign-in provider).
- `GOOGLE_CLIENT_SECRET` — Google OAuth client secret.
- `NEXTAUTH_SECRET` — Secret for NextAuth JWT/session signing.
- `NEXTAUTH_URL` — Production site URL (e.g. `https://yourdomain.com`).

Optional but recommended:
- `NEXTAUTH_URL_INTERNAL` — internal base URL for server-to-server calls (if used).
- `VERCEL_ENV`, `VERCEL_URL` — Vercel sets these automatically.

## Quick deploy steps
1. Sign in to Vercel and select "Import Project" → connect your GitHub account and choose `safraeel/ai-saas-landingpage`.
2. Choose the `server-deploy` branch or change the production branch to `server-deploy`.
3. Make sure the framework is detected as **Next.js**. Set the Build Command to:

```bash
npm run build
```

and the Output Directory to (leave blank) — Vercel will detect Next.

4. Add the environment variables listed above in the Vercel project settings (both `Preview` and `Production` as needed).
5. Deploy. Vercel will run the build and host the app with SSR support.

## Notes
- This project uses NextAuth and depends on MongoDB; ensure `MONGODB_URI` points to a writable DB and `NEXTAUTH_SECRET` is a long random string.
- If you use a custom domain, add it in the Vercel dashboard and configure DNS accordingly.
- If you want automatic previews for PRs, keep the default preview settings.

## Local testing before deploy
Run locally with the environment variables in `.env.local`:

```bash
cp .env.example .env.local
# edit .env.local with your values
npm ci
npm run dev
```

If you want, I can add a GitHub Actions workflow to automatically deploy to Vercel on push — tell me if you'd like that.
