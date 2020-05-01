// Core plugins. Required
import 'phaser/src/cameras/2d/CameraManager';
import 'phaser/src/events/EventEmitter';
import 'phaser/src/gameobjects/DisplayList';
import 'phaser/src/gameobjects/UpdateList';
import 'phaser/src/scene/ScenePlugin';

// Game Objects

// Import all game objects (best for a new project):
// import 'phaser/src/gameobjects';

// To use `this.add`, GameObjectFactory is required.
import 'phaser/src/gameobjects/GameObjectFactory';

// Import the factories you need.
import 'phaser/src/gameobjects/image/ImageFactory';
import 'phaser/src/gameobjects/shape/rectangle/RectangleFactory';
import 'phaser/src/gameobjects/text/static/TextFactory';

// Input

import 'phaser/src/input/InputPlugin';
import 'phaser/src/input/keyboard/KeyboardPlugin';

// Loader

// Import all file types (best for a new project):
// import 'phaser/src/loader';

// To load anything, LoaderPlugin is required.
import 'phaser/src/loader/LoaderPlugin';

// Import the file types you need.
import 'phaser/src/loader/filetypes/ImageFile';
import 'phaser/src/loader/filetypes/SpriteSheetFile';

// Scene plugins

// Import the scene plugins you need (see Phaser.Plugins.DefaultPlugins.DefaultScene).
import 'phaser/src/physics/arcade/ArcadePhysics';
