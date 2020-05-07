import Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'play',
      physics: {
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      }
    });
  }

  create () {
    this.add.image(400, 300, 'space');

    var emitter = this.add.particles('red')
      .createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
      });

    var logo = this.physics.add.image(400, 100, 'logo')
      .setVelocity(100, 200)
      .setBounce(1, 1)
      .setCollideWorldBounds(true);

    emitter.startFollow(logo);

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
