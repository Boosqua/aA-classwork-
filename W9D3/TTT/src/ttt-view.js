const Game = require ("./game.js")

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $board = $("ul.board");
    const that = this;
    // const game = this.game

    $board.on("click", "li.square", function (ele) {
      // let currentPlayer = game.currentPlayer;
      let $currentSquare = $(ele.target);
      // debugger;
      that.makeMove($currentSquare);
      // let markPos = $currentSquare.data("pos");
      // $currentSquare.text(currentPlayer);
      // game.makeMove()
    });
  }

  makeMove($square) {
    let currentPlayer = this.game.currentPlayer;
    if (!$square.text()) {
      $square.text(currentPlayer);
      $square.addClass(currentPlayer)
    } else {
      alert("square is occupied");
      return;
    }
    let markPos = $square.data("pos");
    this.game.playMove(markPos, currentPlayer);
    let winner = this.game.isOver();
    if ( winner ) {
      if (this.game.winner()) {
      alert(`${currentPlayer} has won the game!!!`)
      } else { 
        alert('tie game')
      }
      this.newGame()

    }
    //check for winner

  }
  newGame() {
    $('.board').remove();
    this.setupBoard();
    this.game = new Game();
    this.bindEvents();
  }

  setupBoard() {
    const $ul = $("<ul>").addClass("board");
    this.$el.append($ul);
    for ( let i = 0; i < 3; i++ ) {
      for( let j = 0; j < 3; j++ ) {
        const $square = $("<li>").addClass("square");
        // $square.text("square.square");
        $square.data("pos", [i, j]);
        $ul.append($square);
      }
    }
  }
}

module.exports = View;
