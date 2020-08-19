import {
  GET_LOGGED_IN_USER,
  SET_LOGGED_IN_USER,
} from '../actions/loggedinuser';

export default function users(state = null, action) {
  switch (action.type) {
    case GET_LOGGED_IN_USER:
      return action.user;
    case SET_LOGGED_IN_USER:
      return action.user;
    default:
      return state;
  }
}
