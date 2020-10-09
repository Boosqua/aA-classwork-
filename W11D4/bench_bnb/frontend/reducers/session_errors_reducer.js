import {
   RECEIVE_CURRENT_USER,
   RECEIVE_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
   Object.freeze(state);
   let newState = Object.assign({}, state);

   switch (action.type) {
      case RECEIVE_ERRORS:
         newState.errors = action.errors;
         return newState;
      case RECEIVE_CURRENT_USER:
         newState.errors = [];
         return newState;
      default:
         return state;
   }
}

export default sessionErrorsReducer; 