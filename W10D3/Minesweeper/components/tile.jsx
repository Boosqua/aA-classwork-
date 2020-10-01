import React from "react";
import * as Minesweeper from "../minesweeper";

export default class Tile extends React.Component {
   constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.tileSymbol = this.tileSymbol.bind(this);
   }
   handleClick() {

     this.props.updateGame(this.props.tile, event.altKey);
   }

   tileSymbol(){
      const tile = this.props.tile;   
      let symbol ={text: "", subClass: "hidden"};
      if (tile.explored) {
         symbol.subClass = "shown"
         if ( tile.bombed ) {
            symbol.text = <img src="../frontend/mapapa.png" alt="" />;
         } else {
          let bomb = tile.adjacentBombCount();
          symbol.text = bomb ? bomb : " ";
         }
      } else if (tile.flagged) {
            symbol.text = "🇺🇸";
      }
      return symbol;
   }

   render(){
      const symbol = this.tileSymbol()
      return (
         <div className={ `tile ${symbol.subClass}` } onClick={this.handleClick}>
            {symbol.text}
            {/* <img src="../frontend/Mapa.png" alt=""/> */}
         </div>
      )
   }
}