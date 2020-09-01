/*
* Root reducer
*/

import { combineReducers } from 'redux';
// Reducers imports
import users from './users';
import questions from './questions';
import loggedInUser from './loggedinuser';

// Combine reducers
export default combineReducers({
  users,
  questions,
  loggedInUser,
});
