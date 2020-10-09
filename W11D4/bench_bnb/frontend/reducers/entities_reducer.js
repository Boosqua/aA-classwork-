import { combineReducers } from 'redux'
import usersReducer from './user_reducer'
import benchesReducer from './benches_reducer'

const entitiesReducer = combineReducers({
   users: usersReducer,
   benches: benchesReducer,
});
export default entitiesReducer;