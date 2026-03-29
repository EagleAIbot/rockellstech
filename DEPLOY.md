# GitHub Pages + rockellstech.com

## First deploy

1. Push this repo to `github.com/EagleAIbot/rockellstech` (branch `main`).
2. **Settings → Pages → Build and deployment:** source **Deploy from a branch**, branch **`gh-pages`** folder **`/(root)`**.  
   (The GitHub Action on `main` builds and pushes the `dist/` folder to `gh-pages`.)
3. After the workflow runs, the site is at **https://eagleaibot.github.io/rockellstech/**

## Custom domain

1. **Settings → Pages → Custom domain:** enter `rockellstech.com` (and optionally `www`).
2. Add the DNS records GitHub shows (A + CNAME for `www` if used).
3. In this project, change `vite.config.ts` **`base`** from `'/rockellstech/'` to `'/'`, commit, and push so assets load from the domain root.
4. Optional: add `public/CNAME` containing `rockellstech.com` (Vite copies it to `dist/`).

## Local preview of Pages build

```bash
npm run build && npx vite preview --base /rockellstech/
```
