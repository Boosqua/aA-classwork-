import React from 'react';

export default class Popup extends React.Component{
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
   }
   handleClick() {
      this.props.resetGame()
   }
   render() {
      return (
         <div className="popup">
            <div className="popup-inner">
               {this.props.text}
               <br />
               <button onClick={this.handleClick}>
                  Play Again?
               </button>
            </div>
         </div>
      )
   }
}