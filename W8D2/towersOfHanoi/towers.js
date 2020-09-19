class Towers {
   constructor() {
      this.board = [ [3,2,1],
                  [],
                  []];

      this.makeMove = this.makeMove.bind(this);
   };
   // hasPiece = this.hasPiece.bind(this);
}

Towers.prototype.validPos = function( pos ) {
   if ( pos < 0 || pos > 2 ){
      return false;
   } else {
      return true;
   }
}

Towers.prototype.hasPiece = function ( pos ) {
   return this.board[pos].length > 0 ? true : false;
}

Towers.prototype.validMove = function( startPos, endPos ) {
   debugger
   if ( !( this.validPos(startPos) && this.validPos(endPos) ) || 
      !this.hasPiece(startPos) ) {
      return false;
   } else if( this.hasPiece(endPos) ) {
      return this.board[startPos][0] < this.board[endPos][0] ? true : false;
   } else {
      return true;
   }
}

Towers.prototype.makeMove = function(startPos, endPos) {
   if( this.validMove( startPos, endPos) ) {
      movingPiece = this.board[startPos].pop();
      this.board[endPos].push(movingPiece);
      return true;
   } else {
      return false;
   }
}
const testGame = new Towers();

Towers.prototype.render = function() {
   for( let i = 0; i < 3; i++ ) {
      console.log(JSON.stringify(this.board[i]));
   }
}

Towers.prototype.wonGame = function() {
   let lastRow = this.board[2];
      if( lastRow[0] === 3 && lastRow[1] === 2 && lastRow[2] === 1 ) {
         return true;
      } else {
         return false;
      }
}
module.exports = Towers;