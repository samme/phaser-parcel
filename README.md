Phaser 3 with Parcel
====================

[Parcel is a fast, zero-config web application bundler](https://parceljs.org).

This is a simple Phaser game template using Parcel, and based on [Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game).

Most common transformations ([CoffeeScript](https://parceljs.org/coffeeScript.html), [Babel](https://parceljs.org/javascript.html), [TypeScript](https://parceljs.org/typeScript.html)) work “out of the box”.

```sh
# If you don't have Parcel, install it:
npm install -g parcel-bundler

# Auto-compile and run dev server:
npm run start

# Compile for production:
npm run build
```

You can edit these scripts in [package.json](./package.json) to suit your needs.

See:

- [Getting Started](https://parceljs.org/getting_started.html)
- [Production](https://parceljs.org/production.html)
- [CLI](https://parceljs.org/cli.html)

Game assets
-----------

Static assets used in your JavaScript need to be imported or required.

```javascript
require('../assets/sky.png') // -> './sky.8fef0675.png'
```

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

I don't know any way to set Phaser's compile flags (`CANVAS_RENDERER`, `WEBGL_RENDERER`, etc.) while bundling. I think you would have to make a custom build separately (with webpack) and then include it.
