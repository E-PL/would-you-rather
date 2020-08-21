import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuestionsList from './Questionslist';
import { setDisplayAnsweredQuestions } from '../actions/loggedinuser';

export default function Dashboard(props) {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const showAnswered = useSelector(
    (state) => state.loggedInUser.displayAnsweredQuestions
  );

  return (
    <main>
      <button
        onClick={() => {
          dispatch(setDisplayAnsweredQuestions(null));
        }}
      >
        Unanswered questions{' '}
      </button>
      <button
        onClick={() => {
          dispatch(setDisplayAnsweredQuestions(true));
        }}
      >
        Answered questions{' '}
      </button>

      <QuestionsList
        answered={showAnswered}
        questions={questions}
        loggedInUser={props.loggedInUser}
        users={users}
      />
    </main>
  );
}
