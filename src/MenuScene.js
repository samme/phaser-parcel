import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menu' });
  }

  create () {
    this.add.image(400, 300, 'atlas', 'hello');

    this.input.on('pointerdown', function () {
      this.scene.switch('play');
    }, this);
  }
}
