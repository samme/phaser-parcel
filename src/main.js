import './plugins';
import Game from 'phaser/src/core/Game';
import gameConfig from './gameConfig.js';

function newGame () {
  if (game) return;
  game = new Game(gameConfig);
}

function destroyGame () {
  if (!game) return;
  game.destroy(true);
  game.runDestroy();
  game = null;
}

let game;

if (module.hot) {
  module.hot.dispose(destroyGame);
  module.hot.accept(newGame);
}

if (!game) newGame();
