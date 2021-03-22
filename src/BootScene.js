import Phaser from 'phaser';
import atlasJson from './assets/tp3-multi-atlas.json';
import pngs from './assets/*.png';

console.log(atlasJson);
console.log(pngs);

for (const texture of atlasJson.textures) {
  const { image } = texture;

  texture.image = pngs[`${image.split('.')[0]}`];

  console.log(image, texture.image);
}

export default class BootScene extends Phaser.Scene {
  constructor () {
    super({ key: 'boot' });
  }

  preload () {
    this.load.multiatlas('atlas', atlasJson);
    this.load.once('complete', function () {
      console.log('atlas', this.textures.get('atlas').getFrameNames());
    }, this);
  }

  update () {
    this.scene.start('menu');
    // this.scene.start('play');
    // this.scene.remove();
  }
}
