// Import mock API handlers functions
import { fetchInitialData, saveAnswer, saveQuestion } from '../utils/api';
/* 
Import actions 
*/
import {
  getUsers,
  saveUserAnswer,
  unsaveUserAnswer,
  setUserQuestions,
} from './users';
import {
  getQuestions,
  setQuestionAnswerOne,
  unsetQuestionAnswerOne,
  setQuestionAnswerTwo,
  unsetQuestionAnswerTwo,
  setQuestion,
} from './questions';

/**
 * populateStore
 * 
 * @description The populateStore thunk returns a functional async action that calls the mock API and dispath the actions to save users and polls data to the store. It takes no arguments and it's dispatched from an hook in App component. 
 * @export Function
 * @returns Functional async action
 */
export function populateStore() {
  return (dispatch) => {
    return fetchInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
    // TODO: add error handling
  };
}

/**
 * handleSetAnswerOne
 *
 * @description The handleSetAnswerOne thunk returns a functional async action that optimistically update state and calls the mock API to save user vote for option one votes. If the api call fails store change is reverted. 
 * @export function
 * @param {Object} info { userId, questionId, vote } 
 * @returns Functional async action
 */
// TODO: it would be nice to refactor this with just handleSetAnswer
export function handleSetAnswerOne(info) {
  return (dispatch) => {
    dispatch(setQuestionAnswerOne(info));
    dispatch(saveUserAnswer(info));
    const { userId: authedUser, questionId: qid, vote: answer } = info;
    const answerData = { authedUser, qid, answer };
    saveAnswer(answerData)
      .then((result) => {
        // TODO: remove
        console.log('Answer saved');
      })
      .catch((error) => {
        dispatch(unsetQuestionAnswerOne(info));
        dispatch(unsaveUserAnswer(info));
        // TODO: remove and replace with an alert
        console.error('Error saving answer ', error);
      });
  };
}

/**
 * handleSetAnswerTwo
 *
 * TODO: see above
 * @description The handleSetAnswerOne thunk returns a functional async action that optimistically update state and calls the mock API to save user vote for option two votes. If the api call fails store change is reverted. 
 * @export function
 * @param {Object} info { userId, questionId, vote }
 * @returns Functional async action
 */
export function handleSetAnswerTwo(info) {
  return (dispatch) => {
    dispatch(setQuestionAnswerTwo(info));
    dispatch(saveUserAnswer(info));
    const { userId: authedUser, questionId: qid, vote: answer } = info;
    const answerData = { authedUser, qid, answer };
    saveAnswer(answerData)
      .then((result) => {
        console.log('Answer saved');
      })
      .catch((error) => {
        dispatch(unsetQuestionAnswerTwo(info));
        dispatch(unsaveUserAnswer(info));
        console.error('Error saving answer ', error);
      });
  };
}

/**
 * handleSaveQuestion
 * TODO: remove console.log
 *
 * @description The handleSaveQuestion thunk returns a functional async action that is dispatched when the user submits a new poll. It calls the moch API first, and if there's no errors, it dispatch the actions to update the store.
 * @export function
 * @param {Object} questionData
 * @returns Functional async action
 */
export function handleSaveQuestion(questionData) {
  return (dispatch) => {
    return saveQuestion(questionData)
      .then((res) => {
        console.log('API q mock done', res);
        dispatch(setQuestion(res));
        dispatch(setUserQuestions(res.id, res.author));
      })
      .catch((err) => {
        console.log('Api q mock KO', err);
        alert('Sorry, there was an error saving your poll, please try again.');
      });
  };
}
