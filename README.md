Phaser 3 with Parcel
====================

This is a simple Phaser game template using [Parcel](https://parceljs.org), and based on [Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game).

Most common transformations ([CoffeeScript](https://parceljs.org/coffeeScript.html), [Babel/Flow](https://parceljs.org/javascript.html), [TypeScript](https://parceljs.org/typeScript.html)) work “out of the box”.

Use
---

```sh
# If you don't have Parcel, install it:
npm install -g parcel-bundler

# Clone or download this repo
# Install:
npm install

# Auto-compile and run dev server:
npm run start

# Compile for production:
npm run build
```

You can edit these scripts in [package.json](./package.json) to suit your needs. See:

- [Parcel: Getting Started](https://parceljs.org/getting_started.html)
- [Parcel: Production](https://parceljs.org/production.html)
- [Parcel: CLI](https://parceljs.org/cli.html)

Game assets
-----------

Static assets used in your JavaScript need to be imported or required:

```javascript
require('../assets/sky.png') // -> './sky.8fef0675.png'
```

See [bootScene](./src/app/bootScene.js) for an example.

If you prefer, you can [use a plugin to copy static assets](https://www.npmjs.com/search?q=parcel%20plugin%20copy) instead.

Package aliasing
----------------

You can use [package.alias](https://parceljs.org/module_resolution.html#aliasing) to specify an alternative Phaser build, e.g.,

```json
{
  "name": "my-phaser-game",
  "alias": {
    "phaser": "./node_modules/phaser/src/phaser-arcade-physics.js"
  }
}
```

Custom Phaser
-------------

See the [imports branch](https://github.com/samme/phaser-parcel/tree/imports).


Hot reload
----------

When running the dev server the game is destroyed and then recreated after you save changes to your files. Rarely, this can fail. Just refresh the browser.

If you don't like [hot reload](https://parceljs.org/hmr.html) at all, you can turn it off:

```sh
parcel serve src/index.html --no-hmr
```

