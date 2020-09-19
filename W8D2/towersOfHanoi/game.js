const Towers = require('./towers.js')
const readline = require("readline");

const reader = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
class Game {
   constructor() {
      this.towers = new Towers();

      // this.render = this.towers.render.bind(this.towers);
      this.wonGame = this.over.bind(this);
      this.validMove = this.validMove.bind(this);
      this.makeMove = this.makeMove.bind(this);
   }

}
Game.prototype.getMove = function(cb) { 
   // this.render
   reader.question("choose a stack to move:", function(input1) {
      reader.question(
         "choose a position to place the stack:", 
         function(input2) {
            const startPos = parseInt( input1 );
            const endPos = parseInt( input2 );
            cb(startPos, endPos);
         })
   })
}
// console.log(new Towers())
// console.log(new Game())
Game.prototype.validMove = function( startPos, endPos ) {
   const towers = this.towers;
   let valid = towers.validMove( startPos, endPos );

   return valid
}

Game.prototype.makeMove = function( startPos, endPos ) {
   const towers = this.towers;
   towers.makeMove( startPos, endPos );
}

Game.prototype.over = function() {
   const towers = this.towers;
   return towers.wonGame();
}

function run( game, completionCB ) {
   game.towers.render();
   // console.log(game.over());
   game.towers.board[0] = [];
   game.towers.board[2] = [3,2,1]
   debugger
   if(game.over()) {
      completionCB()
   } else {
      game.getMove( function( startPos, endPos ) {
         if ( game.validMove( startPos, endPos ) ) {
            game.makeMove( startPos, endPos );
            winner = game.over();
         } else {
            console.log("invalid move")
         }
         
         return run( game, completionCB )
      }) 
   }
   

   // completionCB()
}
const test = new Game();

run( test, () => console.log(' over ') );

