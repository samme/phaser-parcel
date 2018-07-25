import defaultScene from './defaultScene';

export default {

  scene: defaultScene,

  callbacks: {
    preBoot: function (game) {
      game.registry.set('start', Date.now());
    }
  }

};
