import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const BenchSearch = (props) => (
   <div>
      <h1>Consider these benches if you're in San Francisco!</h1>
      <BenchMap 
         benches={props.benches}
         updateFilter={props.updateFilter}
         />
      <BenchIndex 
         benches={props.benches} 
         fetchBenches={props.fetchBenches}
         />
   </div>
)

export default BenchSearch;