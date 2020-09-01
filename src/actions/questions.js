/*
* Action types
* TODO: fix names, see action creators TODOS
*/
export const SET_QUESTIONS = 'GET_QUESTIONS';
export const SET_QUESTION_ANSWER_ONE = 'SET_ANSWER_ONE';
export const UNSET_QUESTION_ANSWER_ONE = 'UNSET_ANSWER_ONE';
export const SET_QUESTION_ANSWER_TWO = 'SET_ANSWER_TWO';
export const UNSET_QUESTION_ANSWER_TWO = 'SET_ANSWER_TWO';
export const SET_QUESTION = 'SET_QUESTION';

/*
* Action creators involving store.users
*/

/**
 * setQuestions action creator
 * TODO: fix name
 *
 * @description The setQuestions action creator return the action that will be dispatched after the mock API call to save the questions object to the store.
 * @export Action
 * @param {Object} questions The questions object retrieved from the mock API
 * @returns The plain action object
 */
export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions,
  };
}
/**
 * setQuestionAnswerOne
 *
 * @description The setQuestionAnswerOne action creator adds the answer to optionOne replies in the questions object.
 * @export Action
 * @param {Object} { questionId, userId }
 * @returns The plain action object
 */
export function setQuestionAnswerOne({ questionId, userId }) {
  return {
    type: SET_QUESTION_ANSWER_ONE,
    questionId,

    userId,
  };
}

/**
 * unsetQuestionAnswerOne
 *
 * @description The unsetQuestionAnswerOne remove the answer to optionOne replies in the question object.
 * @export Action
 * @param {Object}  { questionId, userId }
 * @returns The plain action object
 */
export function unsetQuestionAnswerOne({ questionId, userId }) {
  return {
    type: UNSET_QUESTION_ANSWER_ONE,
    questionId,
    userId,
  };
}

/**
 * setQuestionAnswerTwo
 * 
 * @description The setQuestionAnswerTwo action creator adds the answer to optionOne replies in the questions object.
 * @export Action
 * @param {Object} { questionId, userId }
 * @returns The plain action object
 */
export function setQuestionAnswerTwo({ questionId, userId }) {
  return {
    type: SET_QUESTION_ANSWER_TWO,
    questionId,
    userId,
  };
}

/**
 * unsetQuestionAnswerTwo
 *
 * @description The unsetQuestionAnswerTwo remove the answer to optionOne replies in the question object.
 * @export Action
 * @param {Object}  { questionId, userId }
 * @returns The plain action object
 */
export function unsetQuestionAnswerTwo({ questionId, userId }) {
  return {
    type: UNSET_QUESTION_ANSWER_TWO,
    questionId,
    userId,
  };
}


/**
 * setQuestion
 *
 * @description The setQuestion action creator save a new poll in the questions slice of the store.
 * @export Action
 * @param {Object} { id, author, optionOne, optionTwo, timestamp }
 * @returns The plain action object
 */
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
