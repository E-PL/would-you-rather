/*
* Mock API handlers
*/

// import provided mock api functions
import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from './_DATA';

/**
 * fetchInitialData
 * 
 * @description The fetchInitialData function returns a promise that is fullfilled when _getUsers and _getQUestions have completed execution and returns an object containing all users and all polls.
 * @export function
 * @returns Object
 */
export function fetchInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => {
      return {
        users,
        questions,
      };
    }
  );
}

/**
 * saveAnswer
 *
 * @description The saveAnswer function just returns the _saveQuestionAnswer provided function
 * @export function 
 * @param {Object} info Answer data
 * @returns function
 */
export function saveAnswer(info) {
  return _saveQuestionAnswer(info);
}
/**
 * saveQuestion
 *
 * @description The saveQuestion function just returns the _saveQuestion provided function
 * @export function
 * @param {Object} info Question Data
 * @returns function
 */
export function saveQuestion(info) {
  return _saveQuestion(info);
}
