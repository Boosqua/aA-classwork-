import { connect } from 'react-redux';
import React from "react"
import BenchSearch from './bench_search';
import { fetchBenches } from '../../actions/bench_actions';
import * as filterActions from '../../actions/filter_actions';

const mapStateToProps = state => ({
   benches: state.entities.benches
});

const mapDispatchToProps = (state, ownProps) => {
   // debugger
   
   return ({
   fetchBenches: () => dispatch(fetchBenches()),
   updateFilter: filter => dispatch(filterActions.updateFilter(filter))
});
}

export default connect(mapStateToProps, mapDispatchToProps)(BenchSearch);