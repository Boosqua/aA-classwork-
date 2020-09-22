const MovingObject = require("./movingObject.js");
const Util = require("./util.js");

function Bullet(pos, vel, game) {
  MovingObject.call(this, {
    pos: pos,
    vel: this.newVel(vel),
    radius: 2,
    color: "red",
    game: game,
  });
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.newVel = function (vel) {
  if (vel[0] === 0 && vel[1] === 0) {
    return [5, 0];
  }
  let x = vel[0] === 0 ? 0 : vel[0] / Math.abs(vel[0]);
  let y = vel[1] === 0 ? 0 : vel[1] / Math.abs(vel[1]);

  let newVel = [x * 5, y * 5];
  return newVel;
};

Bullet.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

module.exports = Bullet;
