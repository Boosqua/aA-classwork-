import { connect } from 'react-redux';
import React from "react"
import BenchSearch from './bench_search';
import { fetchBenches } from '../../actions/bench_actions';

const mapStateToProps = state => ({
   benches: state.entities.benches
});

const mapDispatchToProps = dispatch => ({
   fetchBenches: () => dispatch(fetchBenches()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchSearch);