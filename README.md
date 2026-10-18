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
- Site URL is `https://dylanliublog.com`. Timezone is `Asia/Shanghai`.
- Post `date` / `updated` front-matter is pinned to the live GitHub Pages timestamps so article pages stay stable across rebuilds.
- `scripts/stable-output.js` emits `.nojekyll` and sorts search/tag output so `hexo generate` is repeatable.
