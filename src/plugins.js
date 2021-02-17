// These imports work in phaser@3.22.0

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

// (a) New project: import all game objects, creators, and factories
import 'phaser/src/gameobjects';

// (b) Mature project:

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

// (a) New project: import loader and all file types
import 'phaser/src/loader';

// (b) Mature project:

// Required for any loading.
// import 'phaser/src/loader/LoaderPlugin';

// Any required file types.
// import 'phaser/src/loader/filetypes/ImageFile';

// Scene plugins
// -------------

// Import the scene plugins you need

import 'phaser/src/data/DataManagerPlugin.js';
import 'phaser/src/gameobjects/lights/LightsPlugin.js';
import 'phaser/src/physics/arcade/ArcadePhysics.js';
import 'phaser/src/physics/impact/ImpactPhysics.js';
import 'phaser/src/physics/matter-js/MatterPhysics.js';
import 'phaser/src/time/Clock.js';
import 'phaser/src/tweens/TweenManager.js';
