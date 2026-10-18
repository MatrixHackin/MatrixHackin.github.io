# DylanLiu's Blog — Hexo source

This branch (`hexo`) holds the **Hexo source** for [dylanliublog.com](https://dylanliublog.com) / [MatrixHackin.github.io](https://github.com/MatrixHackin/MatrixHackin.github.io).

The **published site** lives on `main` (GitHub Pages serves the root of `main` for this username.github.io repo). Do not put Hexo source on `main`.

## Layout (same repo, two branches)

| Branch | Contents | Purpose |
|--------|----------|---------|
| `main` | Generated HTML/CSS/JS | GitHub Pages / live site |
| `hexo` | Hexo project (this branch) | Write posts, theme config, build |

## Setup

```bash
git clone -b hexo https://github.com/MatrixHackin/MatrixHackin.github.io.git blog-source
cd blog-source
npm install
npx hexo server   # local preview
```

## Publish to `main`

`_config.yml` already deploys to this repo's `main`:

```yaml
deploy:
  type: git
  repository: https://github.com/MatrixHackin/MatrixHackin.github.io.git
  branch: main
```

```bash
npx hexo clean && npx hexo generate && npx hexo deploy
```

That updates **only** `main` with the built site. Keep `node_modules/`, `public/`, and `.deploy_git/` out of git (see `.gitignore`).

## Notes

- Theme: `hexo-theme-redefine` (npm dependency; `themes/` is empty by design).
- Canonical URL is `https://dylanliublog.com`. Timezone is `Asia/Shanghai`.
- The published site is also meant to load at `https://matrixhackin.github.io`. Assets and in-site links are root-relative; HTML includes an alternate URL and upgrades HTTP to HTTPS on both hosts.
- GitHub Pages still 301s `*.github.io` to the custom domain **while** `CNAME` is set. Enable **Settings → Pages → Enforce HTTPS** so that redirect is `https://dylanliublog.com` instead of `http://`.
- Post `date` / `updated` front-matter is pinned to the live GitHub Pages timestamps so article pages stay stable across rebuilds.
- `scripts/stable-output.js` emits `.nojekyll` and sorts search/tag output so `hexo generate` is repeatable.
- Post photos are stored as local WebP under `source/images/boltp/` (~12&nbsp;MiB total) and linked from Markdown as `/images/boltp/...webp`. The build still rewrites leftover 闪电图床 (`a1.boltp.com` / `a2.boltp.com`) URLs if any remain, eager-loads the first article photo, and starts lazy-loading ~800px before images enter the viewport. To re-mirror if you paste BoltP URLs again: `npm run mirror-images` (`tools/mirror_boltp.py` — keep this helper out of `scripts/`, Hexo loads every file there as JavaScript).
