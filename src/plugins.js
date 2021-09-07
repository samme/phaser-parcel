// These imports work in phaser@3.55.2

// Core plugins
// ------------

// Always required.

import 'phaser/src/cameras/2d/CameraManager';
import 'phaser/src/events/EventEmitter';
import 'phaser/src/gameobjects/DisplayList';
import 'phaser/src/gameobjects/UpdateList';
import 'phaser/src/scene/ScenePlugin';

// Game Objects
// ------------

// All game objects, creators, and factories
import 'phaser/src/gameobjects';

// OR

// `this.make`:
// import 'phaser/src/gameobjects/GameObjectCreator';

// `this.add`:
// import 'phaser/src/gameobjects/GameObjectFactory';

// Any required creators or factories.
// import 'phaser/src/gameobjects/image/ImageCreator';
// import 'phaser/src/gameobjects/image/ImageFactory';

// Input
// -----

import 'phaser/src/input/InputPlugin';
// import 'phaser/src/input/gamepad/GamepadPlugin.js';
import 'phaser/src/input/keyboard/KeyboardPlugin';

// Loader
// ------

// Loader plugin and all file types
import 'phaser/src/loader';

// OR

// Loader plugin, required for any loading.
// import 'phaser/src/loader/LoaderPlugin';

// Any required file types.
// import 'phaser/src/loader/filetypes/ImageFile';

// Scene plugins
// -------------

// Import the scene plugins you need

// `this.data`
import 'phaser/src/data/DataManagerPlugin.js';

// `this.lights`
import 'phaser/src/gameobjects/lights/LightsPlugin.js';

// `this.physics`
import 'phaser/src/physics/arcade/ArcadePhysics.js';

// `this.matter`
import 'phaser/src/physics/matter-js/MatterPhysics.js';

// ``this.time`
import 'phaser/src/time/Clock.js';

// `this.tweens`
import 'phaser/src/tweens/TweenManager.js';
