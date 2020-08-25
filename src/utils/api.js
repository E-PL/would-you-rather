import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from './_DATA';

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

export function saveAnswer(info) {
  return _saveQuestionAnswer(info);
}
export function saveQuestion(info) {
  return _saveQuestion(info);
}
