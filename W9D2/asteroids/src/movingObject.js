// const Bullet = require("./bullet.js");

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos = this.game.wrap(this.pos);
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  // console.log(this.pos);
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
  // Dist([x_1, y_1], [x_2, y_2])
  let dist = Math.sqrt(
    (this.pos[0] - otherObject.pos[0]) ** 2 +
      (this.pos[1] - otherObject.pos[1]) ** 2
  );
  return dist <= this.radius + otherObject.radius ? true : false;
};

MovingObject.prototype.collideWith = function (otherObject) {};

module.exports = MovingObject;
