import bootScene from './bootScene';
import defaultScene from './defaultScene';
import menuScene from './menuScene';
import endScene from './endScene';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  title: 'Phaser 3 with Parcel 📦',
  url: 'https://github.com/samme/phaser-parcel',
  banner: { text: 'white', background: [ '#FD7400', '#FFE11A', '#BEDB39', '#1F8A70', '#004358' ] },
  scene: [bootScene, menuScene, defaultScene, endScene],
  callbacks: {
    preBoot: function (game) {
      game.registry.set('id', Date.now());
    }
  }
};
