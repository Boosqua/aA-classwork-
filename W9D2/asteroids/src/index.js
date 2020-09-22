const MovingObject = require("./movingObject.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
window.MovingObject = MovingObject;

window.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");
  let gameView = new GameView(ctx);
  gameView.start();
});
