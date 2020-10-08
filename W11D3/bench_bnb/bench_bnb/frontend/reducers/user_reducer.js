import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
   Object.freeze(state)
   let newState = Object.assign({}, state);
   // //debugger
   switch (action.type) {
      case RECEIVE_CURRENT_USER:
         return Object.assign(newState, 
            { [action.currentUser.id]: action.currentUser })
      default:
         return state;
   }
}