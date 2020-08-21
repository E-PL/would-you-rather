import {
  SET_LOGGED_IN_USER,
  SET_DISPLAY_ANSWERED_QUESTIONS,
  LOGOUT,
} from '../actions/loggedinuser';

export default function loggedinUser(state = null, action) {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        ...action.user,
      };
    case SET_DISPLAY_ANSWERED_QUESTIONS:
      return {
        ...state,
        displayAnsweredQuestions: action.display,
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
