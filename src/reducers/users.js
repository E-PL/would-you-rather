import {
  RECEIVE_USERS,
  SET_USER_ANSWER,
  UNSET_USER_ANSWER,
  SET_USER_QUESTIONS,
} from '../actions/users';

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

      case SET_USER_QUESTIONS:
        return {
          ...state,
          [action.userId]: {
            ...state[action.userId], 
            questions: state[action.userId].questions.concat(action.questionId),
          },
        };

    default:
      return {
        ...state,
      };
  }
}
