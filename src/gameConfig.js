import Phaser from 'phaser';
import BootScene from './BootScene';
import PlayScene from './PlayScene';
import MenuScene from './MenuScene';
import EndScene from './EndScene';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  title: 'Phaser 3 with Parcel 📦',
  url: 'https://github.com/samme/phaser-parcel',
  banner: { text: 'white', background: ['#FD7400', '#FFE11A', '#BEDB39', '#1F8A70', '#004358'] },
  scene: [BootScene, MenuScene, PlayScene, EndScene]
};
