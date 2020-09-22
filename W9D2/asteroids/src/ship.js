const MovingObject = require("./movingObject");
const Util = require("./util.js");
const Bullet = require("./bullet.js");

function Ship(game) {
  MovingObject.call(this, {
    pos: game.randomPosition(),
    vel: [0, 0],
    radius: 10,
    color: "green",
    game: game,
  });
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function () {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function (impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.fireBullets = function () {
  let bullet = new Bullet([this.pos[0], this.pos[1]], this.vel, this.game);
  this.game.bullets.push(bullet);
};
module.exports = Ship;
