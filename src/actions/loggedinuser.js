export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const SET_DISPLAY_ANSWERED_QUESTIONS = 'SET_DISPLAY_ANSWERED_QUESTIONS';
export const LOGOUT = 'LOGOUT';

export function setLoggedInUser(user) {
  return {
    type: SET_LOGGED_IN_USER,
    user,
  };
}

export function setDisplayAnsweredQuestions(display) {
  return {
    type: SET_DISPLAY_ANSWERED_QUESTIONS,
    display,
  };
}

export function logout(logout) {
  return {
    type: LOGOUT,
  };
}
