import React from "react"
// import Board from "../minesweeper";
// const { Board } = require("../minesweeper");
import Board from "./board"
import GameBar from "./gamebar"
import * as Minesweeper from "../minesweeper";
import Popup from "./popup";

export default class Game extends React.Component {
   constructor(props) {
      super(props);
      this.state = {board: new Minesweeper.Board(10, 10), showPopup: false};
      this.updateGame = this.updateGame.bind(this);
      this.playGame = this.playGame.bind(this);
      this.resetGame = this.resetGame.bind(this);
   }
   resetGame() {
      console.log('hello!')
      this.setState({board: new Minesweeper.Board(10, 10)})
   }
   updateGame(tile, flag) {
      console.log(`flag = ${flag}`)
      if ( flag ) {
         tile.toggleFlag();
      } else {
         tile.explore();
      }

      this.setState({board: this.state.board});
   }

   playGame() {
      let string = "";
      const board = this.state.board
      if ( board.lost() || board.won() ) {
         string = board.won() ? "You won!" : "You got Mapa'd"
         return < Popup text = { string } resetGame = { this.resetGame } />
      }
   }

   render() {
      return (
         <div>
            <GameBar board = {this.state.board} />
            <Board board = { this.state.board } updateGame =  { this.updateGame } />
            {this.playGame()}
         </div>
      )
   }
}
