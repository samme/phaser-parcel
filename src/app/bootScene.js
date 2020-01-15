export default {

  key: 'boot',

  preload: function () {
    var bg = this.add.rectangle(400, 300, 400, 30, 0x666666);
    var bar = this.add.rectangle(bg.x, bg.y, bg.width, bg.height, 0xffffff).setScale(0, 1);

    this.load.image('sky', require('../assets/sky.png'));
    this.load.image('ground', require('../assets/platform.png'));
    this.load.image('star', require('../assets/star.png'));
    this.load.image('bomb', require('../assets/bomb.png'));
    this.load.spritesheet('dude', require('../assets/dude.png'), { frameWidth: 32, frameHeight: 48 });

    this.load.on('progress', function (progress) {
      bar.setScale(progress, 1);
    });
  },

  create: function () {
    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  },

  update: function () {
    this.scene.start('menu');
    // this.scene.start('play');
    // this.scene.remove();
  }
};
