# Siyanda Njiki Holdings Website

Official marketing website for **Siyanda Njiki Holdings (PTY) LTD** built with Next.js (App Router), Tailwind CSS, and TypeScript.

This README explains:
- how to run the project
- how to build and deploy it
- how to fix the Tailwind/CSS/Node issues that occurred before

---

## 1) Tech Stack

- Next.js `14.2.5` (App Router)
- React `18`
- Tailwind CSS `3`
- TypeScript
- react-hook-form + zod
- nodemailer (contact API email)

---

## 2) Project Structure

- `app/` — pages, layout, global styles, API routes
- `components/` — reusable UI components
- `lib/` — helper utilities
- `posts/` — markdown blog articles
- `public/images/` — all site image assets
- `tailwind.config.js` — Tailwind config
- `postcss.config.js` — Tailwind/PostCSS pipeline
- `next.config.mjs` — Next config (includes dev cache stability fix)

---

## 3) Prerequisites

- Node.js `>= 18` (Node 20+ recommended)
- npm `>= 9`
- Windows/macOS/Linux supported

Check versions:

```bash
node -v
npm -v
```

---

## 4) Install

From the `snh-site` folder:

```bash
npm install
```

---

## 5) Run in Development

From `snh-site`:

```bash
npm run dev
```

Open:

`http://127.0.0.1:3000`

### Why this dev script is special

`npm run dev` is intentionally configured to prevent the previous failures:

1. `npm run clean` → deletes `.next` cache
2. `npm run free-port` → frees port `3000` if occupied
3. starts Next dev server

This avoids:
- `EADDRINUSE` errors
- stale chunk/CSS cache issues after refresh

---

## 6) Production Build (required before deploy)

From `snh-site`:

```bash
npm run build
```

If successful, start production server:

```bash
npm run start
```

Then open:

`http://127.0.0.1:3000`

---

## 7) Environment Variables

Create `.env.local` in `snh-site` (do not commit secrets):

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-password
```

Notes:
- `EMAIL_USER` + `EMAIL_PASS` are used by `app/api/contact/route.ts` for email sending.
- If email credentials are missing, the contact flow still returns WhatsApp link fallback.
- `NEXT_PUBLIC_SITE_URL` is used for metadata base URLs in production.

---

## 8) Deployment Checklist

Run all of these before deploying:

1. `npm install`
2. `npm run build`
3. Ensure env vars are set on hosting platform:
   - `NEXT_PUBLIC_SITE_URL`
   - `EMAIL_USER`
   - `EMAIL_PASS`
4. Verify critical routes:
   - `/`
   - `/services`
   - `/portfolio`
   - `/blog`
   - `/contact`
   - `/robots.txt`
   - `/sitemap.xml`

---

## 9) Tailwind/CSS/Node Troubleshooting (Important)

This section addresses the exact historical issues.

### A) Error: `EADDRINUSE: address already in use 127.0.0.1:3000`

Cause: port `3000` already used by another Node process.

Fix:
- Just run `npm run dev` (it already runs `kill-port 3000`).
- If needed manually:
  ```bash
  npx kill-port 3000
  npm run dev
  ```

---

### B) Tailwind/CSS appears inactive or page looks unstyled

Common cause: stale `.next` artifacts or wrong Tailwind content resolution.

Project protections already in place:
- Tailwind uses:
  - `content.relative: true`
  - `files: ["./app/**", "./components/**", "./lib/**"]`
- Dev script always cleans `.next` before start.

Manual recovery:

```bash
npm run clean
npm run dev
```

Then hard refresh browser: `Ctrl + Shift + R`.

---

### C) Error on refresh: `missing required error components, refreshing...`

Cause seen before: dev cache/chunk instability on Windows + OneDrive + hot reload.

Project protections already in place:
- `app/error.tsx` exists
- `app/global-error.tsx` exists
- `next.config.mjs` sets webpack dev cache to memory:
  - avoids filesystem cache corruption/missing chunk behavior

If this appears again:

```bash
npm run clean
npm run dev
```

---

### D) Build passes but browser still shows old/broken style

Fix:
1. Stop dev server
2. `npm run clean`
3. `npm run dev`
4. hard refresh browser

---

## 10) Useful Scripts

- `npm run dev` — clean + free port + start dev
- `npm run clean` — delete `.next`
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — lint checks
- `npm run verify` — same as build

---

## 11) Git Notes

If your branch includes the approved baseline tag:
- `baseline-as-approved`

You can inspect it with:

```bash
git tag -l
git checkout baseline-as-approved
```

---

## 12) Support Handoff

If someone else receives this code folder:

1. Install Node + npm
2. Open terminal in `snh-site`
3. Run `npm install`
4. Run `npm run dev`
5. If any styling/refresh issue appears, follow Section 9 exactly

This setup has already been hardened for the previous Tailwind/CSS/Node failures.
