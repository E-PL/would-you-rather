import { RECEIVE_USERS } from '../actions/users';
import { SET_USER_ANSWER } from '../actions/users';
import { UNSET_USER_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case SET_USER_ANSWER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],

          answers: {
            ...state[action.userId].answers,
            [action.questionId]: action.vote,
          },
        },
      };
    case UNSET_USER_ANSWER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],

          answers: Object.keys(state[action.userId].answers)
            .filter((key) => {
              return key != action.questionId;
            })
            .reduce((obj, key) => {
              return (obj[key] = state[action.userId].answers[key]), obj;
            }, {}),
        },
      };

    default:
      return {
        ...state,
      };
  }
}
