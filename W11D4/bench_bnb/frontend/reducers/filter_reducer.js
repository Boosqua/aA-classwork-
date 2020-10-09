import { UPDATE_FILTER } from '../actions/filter_actions';

export default ( state = {}, action ) => {
   Object.freeze(state);
   // debugger
   switch (action.type) {
      case UPDATE_FILTER:
         return action.filter;
      default:
         return state;
   }
}