import { fetchInitialData, saveAnswer } from '../utils/api';
import { getUsers, saveUserAnswer, unsaveUserAnswer } from './users';
import {
  getQuestions,
  setQuestionAnswerOne,
  unsetQuestionAnswerOne,
  setQuestionAnswerTwo,
  unsetQuestionAnswerTwo,
} from './questions';

export function populateStore() {
  return (dispatch) => {
    return fetchInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}

export function handleSetAnswerOne(info) {
  return (dispatch) => {
    const { questionId, userId, vote } = info;
    dispatch(setQuestionAnswerOne(info));
    dispatch(saveUserAnswer(info));
    const { userId: authedUser, questionId: qid, vote: answer } = info;
    const answerData = { authedUser, qid, answer };
    saveAnswer(answerData)
      .then((result) => {
        console.log('Answer saved');
      })
      .catch((error) => {
        dispatch(unsetQuestionAnswerOne(info));
        dispatch(unsaveUserAnswer(info));
        console.error('Error saving answer ', error);
      });
  };
}

export function handleSetAnswerTwo(info) {
  return (dispatch) => {
    const { questionId, userId, vote } = info;
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
