export default {

  key: 'menu',

  create: function () {
    this.add.image(400, 150, 'star').setScale(5);
    this.add.text(400, 300, 'Phaser 3 with Parcel\n\n< play >', {
      align: 'center',
      fill: 'lime',
      fontFamily: 'sans-serif',
      fontSize: 48
    })
      .setOrigin(0.5, 0);
    this.input.on('pointerdown', function () {
      this.scene.switch('play');
    }, this);
  }

};
