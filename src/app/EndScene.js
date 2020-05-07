import Phaser from 'phaser';

export default class EndScene extends Phaser.Scene {
  constructor () {
    super({ key: 'end' });
  }

  create () {
    this.add.image(400, 300, 'space');

    this.add.text(400, 200, 'Game Over\n\n< menu >', {
      align: 'center',
      fill: 'white',
      fontFamily: 'sans-serif',
      fontSize: 48
    })
      .setOrigin(0.5, 0);

    this.input.on('pointerdown', function () {
      this.scene.switch('menu');
    }, this);
  }
}
