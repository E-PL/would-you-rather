/*
* Action types
*/
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const SET_DISPLAY_ANSWERED_QUESTIONS = 'SET_DISPLAY_ANSWERED_QUESTIONS';
export const LOGOUT = 'LOGOUT';

/*
* Action creators involving store.loggedInUser
*/

/**
 * setLoggedInUser
 *
 * @description The setLoggedInUser action creator return an action that is dispatched when the user logs in.
 * @export Action
 * @param {Object} user A copy of store.users[loggedInUser.id] object
 * @returns The plain action creator
 */
export function setLoggedInUser(user) {
  return {
    type: SET_LOGGED_IN_USER,
    user,
  };
}

/**
 * setDisplayAnsweredQuestions
 * 
 * @description The setDisplayAnsweredQuestions action creator returns an action that is dispatched when the user select witch kind polls display on the dashboard. I'm saving this choice in the store instead than in component state so when the user navigate away from the dashboard and then comes back, the component will be rendered based on the user previous choice. 
 * @export Action
 * @param {null || bool} display
 * @returns The plain action creator object
 */
export function setDisplayAnsweredQuestions(display) {
  return {
    type: SET_DISPLAY_ANSWERED_QUESTIONS,
    display,
  };
}

/**
 * logout
 * TODO: Remove param
 * 
 * @description The logout action creator returns the action that will be dispatched when the user log out
 * @export Action
 * @param {undefined} logout
 * @returns The plain action creator object
 */
export function logout(logout) {
  return {
    type: LOGOUT,
  };
}
