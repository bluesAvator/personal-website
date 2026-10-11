# Personal website — photography portfolio

Next.js app initialized with:

```bash
pnpm dlx shadcn@latest init --preset b5rR41Mtnc --template next --pointer
```

Typography comes from the template: **Outfit** (body) and **Oxanium** (headings).

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize copy and contact

Edit `lib/site.ts` for your name, tagline, and email (`site.email` is used in the header, hero, contact section, and footer).

## Replace placeholder photos

All stand-in images are defined in `lib/site.ts`. Swap each `src` for a path under `public/` (for example `/photos/hero.jpg`) or your own hosted URL (add the hostname to `next.config.ts` if needed).

| Location on site | Config key |
| --- | --- |
| Home hero (large image) | `placeholderImages.hero` |
| About section portrait | `placeholderImages.portrait` |
| Gallery item 01 — Morning commute | `gallery[0]` |
| Gallery item 02 — Quiet room | `gallery[1]` |
| Gallery item 03 — Coastline | `gallery[2]` |
| Gallery item 04 — Studio session | `gallery[3]` |
| Gallery item 05 — City after rain | `gallery[4]` |
| Gallery item 06 — Golden hour | `gallery[5]` |

Sources today: [Unsplash](https://unsplash.com) and [picsum.photos](https://picsum.photos).

## Pricing

Session packages and rates live in `pricingTiers` inside `lib/site.ts`. The pricing section uses a summary table on desktop and detail cards on all viewports.
