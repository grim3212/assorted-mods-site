# Assorted Mods

Documentation site for the "Assorted" Minecraft mod series by Grim3212, published at
[assortedmods.com](https://assortedmods.com).

Built with [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) and prerendered to static
files.

## Setup

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
