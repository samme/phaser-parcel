import Phaser from 'phaser';
import colors from 'colors.css';

export default {

  create: function () {
    this.add.text(0, 0, `👋 Hello! It’s ${new Date().toUTCString()}`, {
      fill: colors[ Phaser.Utils.Array.GetRandom(['red', 'orange', 'yellow', 'green', 'aqua', 'fuchsia']) ],
      font: '36px fantasy'
    });
  }

};
