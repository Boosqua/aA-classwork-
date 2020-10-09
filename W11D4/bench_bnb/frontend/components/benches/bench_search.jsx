import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const BenchSearch = (props) => (
   <div>
      <BenchIndex 
         benches={props.benches} 
         fetchBenches={props.fetchBenches}
         />
      <BenchMap 
         benches={props.benches}
         />
   </div>
)

export default BenchSearch;