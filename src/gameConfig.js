import { AUTO } from 'phaser/src/const';
import BootScene from './BootScene';
import PlayScene from './PlayScene';
import MenuScene from './MenuScene';
import EndScene from './EndScene';

export default {
  type: AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  title: 'Phaser 3 with Parcel 🚢 (imports)',
  url: 'https://github.com/samme/phaser-parcel',
  banner: { text: 'white', background: ['#FD7400', '#FFE11A', '#BEDB39', '#1F8A70', '#004358'] },
  scene: [BootScene, MenuScene, PlayScene, EndScene],
  audio: { noAudio: true }
};
