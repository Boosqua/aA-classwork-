import React from 'react';

export default class Clock extends React.Component{
   constructor(props) {
      super(props)
       let initialDate = new Date()
       this.state = {
           date: initialDate
         }
        this.ticker = this.componentDidMount()
   }

   componentDidMount(){
       setInterval(()=>{
           this.tick()
       }, 1000)
   }

   componentWillUnmount(){
      clearInterval(this.ticker)
   }

   tick(){
       let currentDate = new Date()
       this.setState({date: currentDate})
   }

   render() {
      return(
         <div className="clock"> 
            <div className="clock-header">
               <h1 className="clearfix">Clock</h1> 
            </div>
                <span className="time-date">
                    <span id="time" > <h1>Time:</h1> 
                        <span id="parsed-time">
                            {" " + this.state.date.getHours()}
                            :
                            {('0' + this.state.date.getMinutes()).slice(-2) }
                            :
                            {('0' + this.state.date.getSeconds()).slice(-2)+ " "}
                            PDT
                        </span>
                    </span>
                    <br />
                    <span id='date'>Date: 
                        <span id="parsed-date">
                        {" " + this.state.date.toDateString()}
                        </span> 
                    </span>
                </span>
         </div>
      )
   }
}

