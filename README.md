Phaser 3 with Parcel
====================

```sh
npm install -g parcel-bundler

npm run start # Auto-compile and run dev server
npm run build # Compile for production
```

See [Parcel: Getting Started](https://parceljs.org/getting_started.html) for more.

Most common transformations ([CoffeeScript](https://parceljs.org/coffeeScript.html), [ES6](https://parceljs.org/transforms.html), [TypeScript](https://parceljs.org/typeScript.html)) work “out of the box”.

[Use a plugin to copy static assets](https://www.npmjs.com/search?q=parcel%20plugin%20copy), if you prefer.

Use [package.alias](https://parceljs.org/module_resolution.html#aliasing) to specify an alternative Phaser build, e.g.,

```json
{
  "name": "my-phaser-game",
  "alias": {
    "phaser": "./node_modules/phaser/src/phaser-arcade-physics.js"
  }
}
```

- [Parcel documentation](https://parceljs.org/)
