# Assorted Mods

Documentation site for the "Assorted" Minecraft mod series by Grim3212, published at
[assortedmods.com](https://assortedmods.com).

Built with [Nuxt 4](https://nuxt.com/docs/getting-started/introduction) and prerendered to static
files.

## Setup

Needs Node 24 (Nuxt 4 requires 22.19 or newer; `nvm use 24` if you use nvm).

```bash
yarn install
```

## Development server

Runs on `http://localhost:3000`:

```bash
yarn dev
```

## Build

```bash
yarn generate   # static site into .output/public
yarn preview    # serve the built site locally
yarn lint
```

## Recipes

Recipes on the pages are `<Recipe id="assortedcore:machine_core" />` components. They read
`app/data/recipes/<namespace>/<path>.json` and the item icons in `public/icons`, both generated
from the mods' datagen output by:

```bash
yarn recipes          # regenerate app/data/recipes and public/icons
yarn recipes --check  # only report what would change and any problems
```

The script scans the pages for every `<Recipe id>`, reads the recipe from the sibling mod
checkout (`../Assorted*/common/src/generated/server`), resolves tags and names, and renders the
icons itself: flat items are copied at texture resolution, blocks and the storage models are
drawn from their model files the way the inventory shows them. The recipe backgrounds in
`public/icons/gui` are the real container GUI textures (crafting table, furnaces, stonecutter,
smithing table, grinding mill, alloy forge) cropped to the recipe area, with the slot positions
written to `app/data/gui.json`; `scripts/recipes/gui.mjs` is where a new station gets added. It needs the mod repos next to
this one and the Minecraft client jar plus NeoForge jar from the gradle cache (built once by
any mod build). `scripts/recipes/config.mjs` lists the environment variables that override
those locations. Special recipe types the game does not describe in JSON (bag dyeing, locking an
ender chest) live in `scripts/recipes/extra`, and a PNG dropped into
`scripts/recipes/icon-overrides/<namespace>/<item>.png` replaces a rendered icon.

Both outputs are committed, so a deploy does not need the mods or the game.

## Deploy

The site is hosted as a static S3 website in the `www.assortedmods.com` bucket. To build and publish
in one step:

```bash
yarn deploy
```

That runs `nuxt generate`, then syncs `.output/public` to the bucket in two passes: the hashed
`_nuxt` bundles with a one year immutable cache, then everything else with a five minute cache.
Both passes use `--delete`, so files removed from the site are removed from the bucket.

It needs the AWS CLI installed and credentials that can write to the bucket, for example through
`aws configure` or `AWS_PROFILE`.

The same deploy is available in GitHub Actions as a manual run: **Actions -> Deploy -> Run
workflow**. It needs `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` set as repository secrets.
