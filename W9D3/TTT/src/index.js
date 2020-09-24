const View = require("./ttt-view.js");
const Game = require("./game.js");
// const Board = require("./board");
// const MoveError = require("./moveError");

window.Game = Game;
$(() => {
    // Your code here
    const game = new Game();
    const $ttt = $(".ttt"); //---> <figure class="ttt">

    const view = new View(game, $ttt);
    
  });
