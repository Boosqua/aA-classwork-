function createBoard(){
   const board = []
   for(let i = 0; i < 3; i++) {
      board.push(new Array(3));
   }
   return board
}

class Board {
   constructor(){
      this.grid = createBoard()
   }

   empty(pos) {
      if (this.valid(pos)) {
         return this.grid[pos[0]][pos[1]] === undefined;
      } else {
         return false
      }
   }
   valid(pos){
      if(pos[0] > 2 || pos[0] < 0) return false;
      if(pos[1] > 2 || pos[1] < 0) return false;
      return true
   }

   place_mark(pos, mark) {
      if(this.empty(pos)) {
         this.board[pos[0]][pos[1]] = mark
      } else {
         return "invalid move"
      }
   }

   won(mark) {
      for(let i = 0; i < 3; i++) {
         for(let j = 0; j < 3; j++) {
            if{}
         }
      }
   }
}

let test = new Board()

test.grid[ 0 ][ 0 ] = 'X' 

// console.log(test.valid([0, 0]))
// console.log(test.valid([5, 1]))
