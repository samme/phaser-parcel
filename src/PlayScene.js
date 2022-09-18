import Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
  constructor () {
    super({ key: 'play' });
  }

  create () {
    const map = this.make.tilemap({ key: 'map' });

    map.createLayer(0, map.addTilesetImage('cybernoid', 'tiles'), 0, 0);

    this.input.keyboard
      .on('keydown-R', function () {
        this.scene.restart();
      }, this)
      .on('keydown-Q', function () {
        this.scene.stop().run('menu');
      }, this)
      .on('keydown-K', function () {
        this.scene.stop().run('end');
      }, this);
  }

  update () {}
}
