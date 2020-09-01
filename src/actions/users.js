/*
* Action types
*/
export const SET_USERS = 'RECEIVE_USERS';
export const ADD_USER_ANSWER = 'SET_USER_ANSWER';
export const REMOVE_USER_ANSWER = 'REMOVE_USER_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

/*
* Action creators involving store.users
*/

/**
 * setUsers action crerator
 * 
 * @export Action
 * @description The setUsers action creator returns the action that will be dispatched after the mock api call to save the users object to the store
 * @param {Object} users The users object retrieved from the mock API
 * @returns the plain action object
 */
export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}
/**
 * addUserAnswer action creator
 *
 * @description The addUserAnswer action creator returns the action that will be dispatched to save the user vote in the users slice of the store.
 * @export Action
 * @param {Object} answerData { questionId, userId, vote }
 * @returns the plain action object
 */
export function addUserAnswer({ questionId, userId, vote }) {
  return {
    type: ADD_USER_ANSWER,
    userId, questionId, vote,
  };
}
/**
 * removeUserAnswer action creator
 *
 * @description The removeUserAnswer action creator returns the action that will be dispatched to remove the user vote from the users slice of the store. This is necessary because I'm optimistically updating the store on user vote, this action will be dispatched if the api fails.
 * @export Action
 * @param {Object} answerData { questionId, userId, vote }
 * @returns the plain action object
 */
export function removeUserAnswer({ questionId, userId, vote }) {
  return {
    type: REMOVE_USER_ANSWER,
    userId, questionId, vote,
  };
}
/**
 * addUserQuestion action creator
 *
 * @description The addUserQuestion action creator returns the action that will be dispatched to add the question id in the user object questions property array.
 * @export Action
 * @param {String} questionId The id of the new question
 * @param {String} userId The user id
 * @returns the plain action object
 */
export function addUserQuestion( questionId, userId ) {
  return {
    type: ADD_USER_QUESTION,
    userId, questionId,
  };
}
