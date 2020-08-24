export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const UNSET_USER_ANSWER = 'UNSET_USER_ANSWER';

export function getUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
export function saveUserAnswer({ questionId, userId, vote }) {
  return {
    type: SET_USER_ANSWER,
    userId, questionId, vote,
  };
}
export function unsaveUserAnswer({ questionId, userId, vote }) {
  return {
    type: UNSET_USER_ANSWER,
    userId, questionId, vote,
  };
}
