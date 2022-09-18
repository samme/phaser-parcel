import Phaser from 'phaser';
import cybernoidImage from './assets/cybernoid.png';
import cybernoidJson from './assets/cybernoid.json';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super({ key: 'boot' });
  }

  preload () {
    const bg = this.add.rectangle(400, 300, 400, 30, 0x666666);
    const bar = this.add.rectangle(bg.x, bg.y, bg.width, bg.height, 0xffffff).setScale(0, 1);

    this.load.image('tiles', cybernoidImage);
    this.load.tilemapTiledJSON('map', cybernoidJson);

    this.load.on('progress', function (progress) {
      bar.setScale(progress, 1);
    });
  }

  update () {
    this.scene.start('menu');
    // this.scene.start('play');
    // this.scene.remove();
  }
}
