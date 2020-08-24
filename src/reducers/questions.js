import { GET_QUESTIONS } from '../actions/questions';
import { SET_QUESTION_ANSWER_ONE } from '../actions/questions';
import { UNSET_QUESTION_ANSWER_ONE } from '../actions/questions';
import { SET_QUESTION_ANSWER_TWO } from '../actions/questions';
import { UNSET_QUESTION_ANSWER_TWO } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

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
      
    case UNSET_QUESTION_ANSWER_ONE:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],

          optionOne: {
            ...state[action.questionId].optionOne,

            votes: state[action.questionId].optionOne.votes.filter((votes) => {
              return votes !==action.userId
            }),
          },
        },
      };

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

      case UNSET_QUESTION_ANSWER_TWO:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],

          optionTwo: {
            ...state[action.questionId].optionOne,

            votes: state[action.questionId].optionTwo.votes.filter((votes) => {
              return votes !==action.userId
            }),
          },
        },
      };

    default:
      return {
        ...state,
      };
  }
}
