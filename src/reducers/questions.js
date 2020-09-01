// Import action types
// TODO: oneline, I'm importing from the same file, why did I shift + alt + arrowed down this?
import { GET_QUESTIONS } from '../actions/questions';
import { SET_QUESTION_ANSWER_ONE } from '../actions/questions';
import { UNSET_QUESTION_ANSWER_ONE } from '../actions/questions';
import { SET_QUESTION_ANSWER_TWO } from '../actions/questions';
import { UNSET_QUESTION_ANSWER_TWO } from '../actions/questions';
import { SET_QUESTION } from '../actions/questions';

/**
 * questions Reducer
 * 
 * @description The questions Reducer will handle actions that update store.questions
 * @export reducer
 * @param {Object} [state={}] store.questions defaults to an empty object
 * @param {Object} action
 * @returns The updated store.questions property
 */
export default function questions(state = {}, action) {
  switch (action.type) {
    // The action dispatched at first load save all questions to the store
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    // The action dispatched when the user vote for an option one adds that user id to the question optionOne.votes array
    case SET_QUESTION_ANSWER_ONE:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],

          optionOne: {
            ...state[action.questionId].optionOne,

            votes: state[action.questionId].optionOne.votes.concat([
              action.userId,
            ]),
          },
        },
      };
    // The action dispatched when the optimistic update fails removes the user id from the question optionOne.votes array
    case UNSET_QUESTION_ANSWER_ONE:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],

          optionOne: {
            ...state[action.questionId].optionOne,

            votes: state[action.questionId].optionOne.votes.filter((votes) => {
              return votes !== action.userId;
            }),
          },
        },
      };
    // The action dispatched when the user vote for an option two adds that user id to the question optionTwo.votes array
    case SET_QUESTION_ANSWER_TWO:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],

          optionTwo: {
            ...state[action.questionId].optionTwo,

            votes: state[action.questionId].optionTwo.votes.concat([
              action.userId,
            ]),
          },
        },
      };
    // The action dispatched when the optimistic update fails removes the user id from the question optionTwo.votes array
    case UNSET_QUESTION_ANSWER_TWO:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],

          optionTwo: {
            ...state[action.questionId].optionOne,

            votes: state[action.questionId].optionTwo.votes.filter((votes) => {
              return votes !== action.userId;
            }),
          },
        },
      };
    // The action dispatched when an user adds a new poll adds a new proprerty to store.questions using the question id as property name.
    case SET_QUESTION:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          author: action.author,
          optionOne: action.optionOne,
          optionTwo: action.optionTwo,
          timestamp: action.timestamp,
        },
      };

    default:
      return {
        ...state,
      };
  }
}
