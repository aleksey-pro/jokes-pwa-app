import { combineReducers } from 'redux';
import jokes from './jokes';
import votes from './votes';

const rootReducer = combineReducers({
  jokes,
  votes,
});

export default rootReducer;
