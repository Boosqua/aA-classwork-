import React from 'react';

export default class Tab extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         selectedTab: 0,
      }
   }

   render() {
       return (
          
           <ul>
            {
            
            this.props.tabs.map( (tab) => {
               // debugger
                <li><h1>{tab.title}</h1>
                    if (tab.id === this.state.selectedTab ){
                        <article>{tab.content}</article>
                    }
                </li>
               })
            }
         </ul>
      )
   }
}