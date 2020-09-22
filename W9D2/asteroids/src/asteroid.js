const MovingObject = require("./movingObject");
const Util = require("./util.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");

function Asteroid(pos, game) {
  MovingObject.call(this, {
    pos: pos,
    vel: Util.randomVec(1),
    radius: 20,
    color: "gray",
    game: game,
  });
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate.bind(otherObject)();
  } else if (otherObject instanceof Bullet) {
    this.game.remove.bind(this.game)(otherObject);
    this.game.remove.bind(this.game)(this);
  }
};

module.exports = Asteroid;
