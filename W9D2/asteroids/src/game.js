const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");

const CONSTANTS = {
  DIM_X: 1000,
  DIM_Y: 600,
  NUM_ASTEROIDS: 20,
};

function Game() {
  this.asteroids = this.addAsteroids();
  this.bullets = [];
  this.ship = new Ship(this);
}

Game.prototype.addAsteroids = function () {
  let asteroids = [];
  for (let i = 0; i < CONSTANTS.NUM_ASTEROIDS; i++) {
    asteroids.push(new Asteroid(this.randomPosition(), this));
  }
  return asteroids;
};

Game.prototype.randomPosition = function () {
  let pos = [];
  pos.push(Math.floor(Math.random() * CONSTANTS.DIM_X) + 40);
  pos.push(Math.floor(Math.random() * CONSTANTS.DIM_Y) + 40);
  return pos;
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, 1000, 600);
  let total = this.allObjects();
  for (let i = 0; i < total.length; i++) {
    total[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function () {
  let total = this.allObjects();
  for (let i = 0; i < total.length; i++) {
    total[i].move();
  }
};

Game.prototype.remove = function (object) {
  if (object instanceof Asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(object), 1);
  } else if (object instanceof Bullet) {
    this.bullets.splice(this.bullets.indexOf(object), 1);
  }
};

Game.prototype.checkCollisions = function () {
  let total = this.allObjects();
  for (let i = 0; i < total.length; i++) {
    for (let j = i + 1; j < total.length; j++) {
      let check = total[i].isCollidedWith(total[j]);
      if (check) {
        total[i].collideWith(total[j]);
      }
    }
  }
};

Game.prototype.step = function () {
  this.moveObjects();
  this.checkCollisions();
};
Game.prototype.wrap = function (pos) {
  pos[0] = pos[0] > CONSTANTS.DIM_X ? 0 : pos[0];
  pos[0] = pos[0] < 0 ? CONSTANTS.DIM_X : pos[0];
  pos[1] = pos[1] > CONSTANTS.DIM_Y ? 0 : pos[1];
  pos[1] = pos[1] < 0 ? CONSTANTS.DIM_Y : pos[1];
  return pos;
};

Game.prototype.allObjects = function () {
  return this.asteroids.concat([this.ship]).concat(this.bullets);
};
module.exports = Game;
