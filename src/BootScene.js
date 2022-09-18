import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super({ key: 'boot' });
  }

  preload () {
    const bg = this.add.rectangle(400, 300, 400, 30, 0x666666);
    const bar = this.add.rectangle(bg.x, bg.y, bg.width, bg.height, 0xffffff).setScale(0, 1);

    this.load.image('space', 'space.png');
    this.load.image('logo', 'logo.png');
    this.load.image('red', 'red.png');

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
