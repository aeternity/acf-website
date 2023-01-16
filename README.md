## Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It uses `pnpm` for package management and compilation.

The project uses [daisyUI](https://daisyui.com/) and [tailwindcss](https://tailwindcss.com/).

## Local setup

First, run the dev server:

```bash
brew install node pnpm
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Editing content

You can start editing the page by modifying `pages/index.tsx` (or any page).
The page auto-updates as you edit the file.

You can add pages in Markdown (.mdx) format in `/pages`
You can write a blog post in `/content/blog`

## Deployment

Deployment is done as a static website.
You can build for deployment via:

```bash
pnpm build && pnpm export
```

Then have a look at the `./out` directory
