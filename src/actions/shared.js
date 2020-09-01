// Import mock API handlers functions
import { fetchInitialData, saveAnswer, saveQuestion } from '../utils/api';
/* 
Import actions 
*/
import {
  setUsers,
  addUserAnswer,
  removeUserAnswer,
  addUserQuestion,
} from './users';
import {
  setQuestions,
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
      dispatch(setUsers(users));
      dispatch(setQuestions(questions));
    });
    // TODO: add error handling
  };
}

/**
 * handleSetAnswer
 *
 * @description The handleSetAnswer thunk returns a functional async action that optimistically update state and calls the mock API to save user vote. If the api call fails store change is reverted. 
 * @export function
 * @param {Object} info { userId, questionId, vote } 
 * @returns Functional async action
 */
export function handleSetAnswer(info) {
  return (dispatch) => {
    const votingA = info.vote === 'optionOne';
    votingA ? dispatch(setQuestionAnswerOne(info)) : dispatch(setQuestionAnswerTwo(info));
    dispatch(addUserAnswer(info));
    const { userId: authedUser, questionId: qid, vote: answer } = info;
    const answerData = { authedUser, qid, answer };
    saveAnswer(answerData)
      .catch((error) => {
       votingA ? dispatch(unsetQuestionAnswerOne(info)) : dispatch(unsetQuestionAnswerTwo(info));
        dispatch(removeUserAnswer(info));
        alert('Sorry, there was an error saving your answer, please try again.');
      });
  };
}


/**
 * handleSaveQuestion
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
        dispatch(setQuestion(res));
        dispatch(addUserQuestion(res.id, res.author));
      })
      .catch((err) => {
        alert('Sorry, there was an error saving your poll, please try again.');
      });
  };
}
