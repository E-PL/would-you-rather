// Import action types
import {
  SET_USERS,
  ADD_USER_ANSWER,
  REMOVE_USER_ANSWER,
  ADD_USER_QUESTION,
} from '../actions/users';

/**
 * users Reducer
 * 
 * @description The users reducer will handle actions that update store.users 
 * @export reducer
 * @param {Object} [state={}] store.users defaults to an empty object
 * @param {Object} action
 * @returns The updated store.user property
 */
export default function users(state = {}, action) {
  switch (action.type) {
    // The action dispatched at first load save all users to the store
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      };
    // The action dispatched when the user answers a poll, adds a property to the store.users[userId].answers object using the question id as key and the vote as value
    case ADD_USER_ANSWER:
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

    // As the previous action is dispatched before calling the mock api, here's the action to revert the change should the mock API call fail
    case REMOVE_USER_ANSWER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],

          answers: Object.keys(state[action.userId].answers)
            .filter((key) => {
              return key !== action.questionId;
            })
            .reduce((obj, key) => {
              return ( obj[key] = state[action.userId].answers[key], obj )
            }, {}),
        },
      };

      // The action dispatched when the user save a new poll, adds the question id to store.users[userId].questions array
      case ADD_USER_QUESTION:
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
