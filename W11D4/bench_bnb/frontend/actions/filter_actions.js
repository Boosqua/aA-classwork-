import { fetchBenches } from "./bench_actions";

export const UPDATE_FILTER = 'UPDATE_FILTER';

//  export const updateBounds = bounds => ({
//     type: UPDATE_FILTER,
//     bounds
//  })
 
 export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter, value
 })

//  export const updateFilter = (filter) => (dispatch, getState) => {
//    // debugger
//    dispatch(changeFilter(filter));
//    // return dispatch(fetchBenches(getState().ui.filter));
//    return fetchBenches(getState().ui.filter)(dispatch);
//  }

export const updateFilter = (filter, value) => {
   return (dispatch, getState) => {
      dispatch(changeFilter(filter, value));
      // debugger
      return fetchBenches(getState().ui.filter)(dispatch);
   }
}