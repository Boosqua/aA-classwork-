import React from 'react';

export default class BenchIndex extends React.Component {
   constructor(props) {
      super(props)
      this.showBenches = this.showBenches.bind(this)
   }

   componentDidMount() {
      // debugger
      // let that = this
      // this.props.fetchBenches()
   }

   showBenches(){ 
      // debugger
      let benches = Object.values(this.props.benches);
      // benches = benches ? benches : [];

      return benches.map((bench) => {
         return (
            <li key={bench.id}>{bench.id}:
               <ul>
                  <li>{bench.description}</li>
                  <li>{bench.lat}, {bench.lng}</li>
               </ul>
            </li>
         )
      })
   }

   render(){
      return (
         <div className="all-benches">
            <ul className="bench-list">
               {this.showBenches()}
            </ul>
         </div>
      )
   }
}