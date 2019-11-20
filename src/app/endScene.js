export default {

  key: 'end',

  create: function () {
    this.add.image(400, 150, 'bomb').setScale(5);
    this.add.text(400, 300, 'Game Over\n\n< menu >', {
      align: 'center',
      fill: 'red',
      fontFamily: 'sans-serif',
      fontSize: 48
    })
      .setOrigin(0.5, 0);
    this.input.on('pointerdown', function () {
      this.scene.switch('menu');
    }, this);
    this.cameras.main.flash(500, 255, 0, 0);
  }

};
