import { combineReducers } from 'redux';
import session from './SessionReducer';
import tweets from './TweetsReducer';

export default combineReducers({session, tweets});