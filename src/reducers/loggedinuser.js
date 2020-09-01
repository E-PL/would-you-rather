// Import action types
import {
  SET_LOGGED_IN_USER,
  SET_DISPLAY_ANSWERED_QUESTIONS,
  LOGOUT,
} from '../actions/loggedinuser';

/**
 * loggedinUser Reducer
 * 
 * @description The loggedinUser Reducer will handle actions targetting store.loggedInUser
 * @export reducer
 * @param {Object} [state=null] store.loggedInUser, default value is null.
 * @param {Object} action
 * @returns The updated loggedInUser store property
 */
export default function loggedinUser(state = null, action) {
  switch (action.type) {
    // The action dispatched for logins copy store.users[selectedUser] in store.loggedInUser 
    // TODO: decide if it really need to spread previus state, it shouldn't.
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        ...action.user,
      };
    // The action dispatched when the user select witch kind of polls should be displayed on the dashboard, save a boolean value in store.loggedInUser.displayAnsweredQuestions
    case SET_DISPLAY_ANSWERED_QUESTIONS:
      return {
        ...state,
        displayAnsweredQuestions: action.display,
      };
    // The action dispatched to log out resets store.loggedInUser to its null default value
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
