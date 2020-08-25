export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SET_QUESTION_ANSWER_ONE = 'SET_ANSWER_ONE';
export const UNSET_QUESTION_ANSWER_ONE = 'UNSET_ANSWER_ONE';
export const SET_QUESTION_ANSWER_TWO = 'SET_ANSWER_TWO';
export const UNSET_QUESTION_ANSWER_TWO = 'SET_ANSWER_TWO';
export const SET_QUESTION = 'SET_QUESTION';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}
export function setQuestionAnswerOne({ questionId, userId }) {
  return {
    type: SET_QUESTION_ANSWER_ONE,
    questionId,

    userId,
  };
}

export function unsetQuestionAnswerOne({ questionId, userId }) {
  return {
    type: UNSET_QUESTION_ANSWER_ONE,
    questionId,
    userId,
  };
}

export function setQuestionAnswerTwo({ questionId, userId }) {
  return {
    type: SET_QUESTION_ANSWER_TWO,
    questionId,

    userId,
  };
}

export function unsetQuestionAnswerTwo({ questionId, userId }) {
  return {
    type: UNSET_QUESTION_ANSWER_TWO,
    questionId,
    userId,
  };
}


export function setQuestion({ id, author, optionOne, optionTwo, timestamp }) {
  return {
    type: SET_QUESTION,
    id,
    author,
    optionOne,
    optionTwo,
    timestamp,
  };
}
