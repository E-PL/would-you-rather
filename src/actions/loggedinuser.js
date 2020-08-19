export const GET_LOGGED_IN_USER = ' GET_LOGGED_IN_USER';
export const SET_LOGGED_IN_USER = ' SET_LOGGED_IN_USER';

export function getLoggedInUser(user) {
  return {
    type: GET_LOGGED_IN_USER,
    user,
  };
}

export function setLoggedInUser(user) {
  return {
    type: SET_LOGGED_IN_USER,
    user,
  };
}
