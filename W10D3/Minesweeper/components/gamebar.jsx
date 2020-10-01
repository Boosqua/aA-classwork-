import React from "react"
import * as Minesweeper from "../minesweeper";

export default class GameBar extends React.Component{
   constructor(props){
      super(props)
   }

   render() {
      return (
         <div className="game-bar">
            <h1>MINESWEEPER</h1>
            <br/>
            <p>Click on a tile to uncover it.</p>
            <p>Alt click on a tile to place a flag 🇺🇸.</p>
            <p>Avoid the <img src="../frontend/mapapa.png" alt="Mapa" /> !!!</p>
         </div>
      )
   }
}