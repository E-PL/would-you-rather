/*
* Action types
* TODO: fix names, see action creators TODOS
*/
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const UNSET_USER_ANSWER = 'UNSET_USER_ANSWER';
export const SET_USER_QUESTIONS = 'SET_USER_QUESTIONS';

/*
* Action creators involving store.users
*/

/**
 * getUsers action crerator
 * TODO: fix name, it is called after the api that get the data, but what the action does is setting the user slice of the store, so it should really be setUsers
 *
 * @export Action
 * @description The getUsers action creator returns the action that will be dispatched after the mock api call to save the users object to the store
 * @param {Object} users The users object retrieved from the mock API
 * @returns the plain action object
 */
export function getUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
/**
 * saveUserAnswer action creator
 * TODO: fix name, the action adds an answer 
 *
 * @description The saveUserAnswer action creator returns the action that will be dispatched to save the user vote in the users slice of the store.
 * @export Action
 * @param {Object} answerData { questionId, userId, vote }
 * @returns the plain action object
 */
export function saveUserAnswer({ questionId, userId, vote }) {
  return {
    type: SET_USER_ANSWER,
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
