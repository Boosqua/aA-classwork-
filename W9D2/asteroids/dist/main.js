/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nfunction Asteroid(pos, game) {\n  MovingObject.call(this, {\n    pos: pos,\n    vel: Util.randomVec(1),\n    radius: 20,\n    color: \"gray\",\n    game: game,\n  });\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate.bind(otherObject)();\n  } else if (otherObject instanceof Bullet) {\n    this.game.remove.bind(this.game)(otherObject);\n    this.game.remove.bind(this.game)(this);\n  }\n};\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./movingObject.js */ \"./src/movingObject.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Bullet(pos, vel, game) {\n  MovingObject.call(this, {\n    pos: pos,\n    vel: this.newVel(vel),\n    radius: 2,\n    color: \"red\",\n    game: game,\n  });\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.newVel = function (vel) {\n  if (vel[0] === 0 && vel[1] === 0) {\n    return [5, 0];\n  }\n  let x = vel[0] === 0 ? 0 : vel[0] / Math.abs(vel[0]);\n  let y = vel[1] === 0 ? 0 : vel[1] / Math.abs(vel[1]);\n\n  let newVel = [x * 5, y * 5];\n  return newVel;\n};\n\nBullet.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n};\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nconst CONSTANTS = {\n  DIM_X: 1000,\n  DIM_Y: 600,\n  NUM_ASTEROIDS: 20,\n};\n\nfunction Game() {\n  this.asteroids = this.addAsteroids();\n  this.bullets = [];\n  this.ship = new Ship(this);\n}\n\nGame.prototype.addAsteroids = function () {\n  let asteroids = [];\n  for (let i = 0; i < CONSTANTS.NUM_ASTEROIDS; i++) {\n    asteroids.push(new Asteroid(this.randomPosition(), this));\n  }\n  return asteroids;\n};\n\nGame.prototype.randomPosition = function () {\n  let pos = [];\n  pos.push(Math.floor(Math.random() * CONSTANTS.DIM_X) + 40);\n  pos.push(Math.floor(Math.random() * CONSTANTS.DIM_Y) + 40);\n  return pos;\n};\n\nGame.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, 1000, 600);\n  let total = this.allObjects();\n  for (let i = 0; i < total.length; i++) {\n    total[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function () {\n  let total = this.allObjects();\n  for (let i = 0; i < total.length; i++) {\n    total[i].move();\n  }\n};\n\nGame.prototype.remove = function (object) {\n  if (object instanceof Asteroid) {\n    this.asteroids.splice(this.asteroids.indexOf(object), 1);\n  } else if (object instanceof Bullet) {\n    this.bullets.splice(this.bullets.indexOf(object), 1);\n  }\n};\n\nGame.prototype.checkCollisions = function () {\n  let total = this.allObjects();\n  for (let i = 0; i < total.length; i++) {\n    for (let j = i + 1; j < total.length; j++) {\n      let check = total[i].isCollidedWith(total[j]);\n      if (check) {\n        total[i].collideWith(total[j]);\n      }\n    }\n  }\n};\n\nGame.prototype.step = function () {\n  this.moveObjects();\n  this.checkCollisions();\n};\nGame.prototype.wrap = function (pos) {\n  pos[0] = pos[0] > CONSTANTS.DIM_X ? 0 : pos[0];\n  pos[0] = pos[0] < 0 ? CONSTANTS.DIM_X : pos[0];\n  pos[1] = pos[1] > CONSTANTS.DIM_Y ? 0 : pos[1];\n  pos[1] = pos[1] < 0 ? CONSTANTS.DIM_Y : pos[1];\n  return pos;\n};\n\nGame.prototype.allObjects = function () {\n  return this.asteroids.concat([this.ship]).concat(this.bullets);\n};\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.ctx = ctx;\n  this.game = new Game();\n  this.ship = this.game.ship;\n}\n\nGameView.prototype.bindKeyHandlers = function () {\n  key(\"a\", () => {\n    this.game.ship.power([-1, 0]);\n  });\n  key(\"w\", () => {\n    this.game.ship.power([0, -1]);\n  });\n  key(\"s\", () => {\n    this.game.ship.power([0, 1]);\n  });\n  key(\"d\", () => {\n    this.game.ship.power([1, 0]);\n  });\n  key(\"space\", () => {\n    this.game.ship.fireBullets();\n  });\n};\n\nGameView.prototype.start = function () {\n  this.bindKeyHandlers();\n\n  setInterval(() => {\n    this.game.step.bind(this.game)();\n    this.game.draw.bind(this.game)(this.ctx);\n  }, 20);\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./movingObject.js */ \"./src/movingObject.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n  let canvas = document.getElementById(\"game-canvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let gameView = new GameView(ctx);\n  gameView.start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/movingObject.js":
/*!*****************************!*\
  !*** ./src/movingObject.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Bullet = require(\"./bullet.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos = this.game.wrap(this.pos);\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  // console.log(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n  // Dist([x_1, y_1], [x_2, y_2])\n  let dist = Math.sqrt(\n    (this.pos[0] - otherObject.pos[0]) ** 2 +\n      (this.pos[1] - otherObject.pos[1]) ** 2\n  );\n  return dist <= this.radius + otherObject.radius ? true : false;\n};\n\nMovingObject.prototype.collideWith = function (otherObject) {};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/movingObject.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nfunction Ship(game) {\n  MovingObject.call(this, {\n    pos: game.randomPosition(),\n    vel: [0, 0],\n    radius: 10,\n    color: \"green\",\n    game: game,\n  });\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function () {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n};\n\nShip.prototype.power = function (impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullets = function () {\n  let bullet = new Bullet([this.pos[0], this.pos[1]], this.vel, this.game);\n  this.game.bullets.push(bullet);\n};\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });