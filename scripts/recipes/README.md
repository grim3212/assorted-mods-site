# Recipe export

Turns the mods' recipes into the data and images the site's `<Recipe>` component shows.

## Run it

```bash
yarn recipes          # regenerate everything the pages use
yarn recipes --check  # only report problems, write nothing into the site
```

Needs Node 24, the mod repos checked out next to this one (`../AssortedCore` and so on), and a
gradle cache that has built any of the mods once, which is where the Minecraft client jar and
the NeoForge jar come from. `config.mjs` lists the environment variables that point elsewhere
(`ASSORTED_MODS_ROOT`, `MC_CLIENT_JAR`, `NEOFORGE_JAR`, `MC_VERSION`).

## What it does

1. Scans `app/pages` for every `<Recipe id="namespace:path" />`.
2. Loads each recipe from `../<Mod>/common/src/generated/server/data/<namespace>/recipe`, or
   from `extra/<namespace>/<path>.json` here when the game has no JSON for it (bag dyeing,
   locking an ender chest). Extras use the game's recipe format plus an optional `site.note`.
3. Resolves tags (mod, vanilla and NeoForge `c:` tags), display names and counts, and writes
   one file per recipe to `app/data/recipes/<namespace>/<path>.json`.
4. Renders an icon for every item those recipes mention into `public/icons/<namespace>/`.
   Flat items are copied at texture size; blocks, OBJ models and the storage models are drawn
   from their model files with the game's inventory transform and lighting. A PNG placed at
   `icon-overrides/<namespace>/<item>.png` is used instead of rendering.
5. Crops the container GUI textures into `public/icons/gui/` and writes their slot positions to
   `app/data/gui.json`. New stations are added in `gui.mjs`.

Outputs are committed, so building and deploying the site needs none of the above.

## Adding a recipe to a page

Put `<Recipe id="assortedcore:machine_core" />` where the screenshot used to go, run
`yarn recipes`, commit the page together with the new files under `app/data` and `public/icons`.
The script prints a warning for anything it could not find or draw.
