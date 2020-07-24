import { fetchInitialData } from '../utils/api';
import { getUsers } from './users';
import { getQuestions } from './questions';

export function populateStore() {
  return (dispatch) => {
    return fetchInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}
