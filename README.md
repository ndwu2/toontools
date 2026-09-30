# ToonTools

A small collection of Toontown Rewritten tools and references, built with SvelteKit and hosted on GitHub Pages.

## Tools

- **Cog Locations**: department spawn percentages for every street, plus a lookup for where each Cog roams.
- **Cog Suit Level Tables**: promotion requirements for every Cog disguise, including v2.0.
- **Hole-in-One Golfing**: position, aim and strength for each golf hole, by difficulty.

There's also a Resources page linking to other community tools.

## Development

```sh
npm install
npm run dev     # start the dev server
npm run check   # type check
npm run build   # build the static site into build/
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
