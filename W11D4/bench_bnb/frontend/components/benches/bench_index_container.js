import { connect } from 'react-redux';
import React from "react"
import BenchIndex from './bench_index';
import { fetchBenches } from '../../actions/bench_actions';

const mapStateToProps = state => ({
   benches: state.entities.benches
});

const mapDispatchToProps = dispatch => ({
   fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);