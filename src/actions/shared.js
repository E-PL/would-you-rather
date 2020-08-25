import { fetchInitialData, saveAnswer, saveQuestion } from '../utils/api';
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
