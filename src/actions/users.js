/*
* Action types
* TODO: fix names, see action creators TODOS
*/
export const SET_USERS = 'RECEIVE_USERS';
export const ADD_USER_ANSWER = 'SET_USER_ANSWER';
export const UNSET_USER_ANSWER = 'UNSET_USER_ANSWER';
export const SET_USER_QUESTIONS = 'SET_USER_QUESTIONS';

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
 * unSaveUserAnswer action creator
 * TODO: fix name, the action remove an answer
 *
 * @description The saveUserAnswer action creator returns the action that will be dispatched to remove the user vote from the users slice of the store. This is necessary because I'm optimistically updating the store on user vote, this action will be dispatched if the api fails.
 * @export Action
 * @param {Object} answerData { questionId, userId, vote }
 * @returns the plain action object
 */
export function unsaveUserAnswer({ questionId, userId, vote }) {
  return {
    type: UNSET_USER_ANSWER,
    userId, questionId, vote,
  };
}
/**
 * setUserQuestions action creator
 * TODO: fix name, the action adds a question
 *
 * @description The setUserQuestions action creator returns the action that will be dispatched to add the question id in the user object questions property array.
 * @export Action
 * @param {String} questionId The id of the new question
 * @param {String} userId The user id
 * @returns the plain action object
 */
export function setUserQuestions( questionId, userId ) {
  return {
    type: SET_USER_QUESTIONS,
    userId, questionId,
  };
}
