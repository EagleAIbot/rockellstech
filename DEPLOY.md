# GitHub Pages + rockellstech.com

## How deploy works (current)

- **Settings → Pages → Build and deployment → Source:** **GitHub Actions** (not “Deploy from a branch”).
- Pushes to **`main`** run `.github/workflows/deploy.yml`: build Vite → **`actions/upload-pages-artifact`** → **`actions/deploy-pages`**.
- No **`gh-pages`** branch is required anymore (old branch can be deleted in GitHub if it exists).

## Custom domain + HTTPS

1. **Settings → Pages → Custom domain:** `rockellstech.com` (save).
2. DNS at your registrar: GitHub’s **A** records on `@` and **CNAME** `www` → `eagleaibot.github.io` (see GitHub’s DNS checklist).
3. Wait until **DNS check** passes in Pages settings → then **Enforce HTTPS** becomes available — turn it on.
4. This repo uses **`vite.config.ts` `base: '/'`** so assets work on the apex domain.

## URLs

- **https://eagleaibot.github.io/rockellstech/** (project Pages URL; may redirect once custom domain is active)
- **https://rockellstech.com** (after DNS + HTTPS)
