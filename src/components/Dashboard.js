import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuestionsList from './Questionslist';
import { setDisplayAnsweredQuestions } from '../actions/loggedinuser';

/**
 * Dashboard component
 *
 * @description The dashboard component will be rendered for logged in users visiting the homepage.
 * @export Dashboard Component
 * @param {Object} props
 * @param {Object | null} [props.loggedInUser = null] The logged in user object is taken from the store and passed as prop to the dashboard component. If no user is logged in it defaults to null
 * @returns Children components
 */
export default function Dashboard(props) {
  // Grab dispatch reference
  const dispatch = useDispatch();
  // Subscribe to the questions in store
  const questions = useSelector((state) => state.questions);
  // Subscribe to users in store
  const users = useSelector((state) => state.users);
  // Subscribe to displayAnsweredQuestions: the boolean property of loggedInUser in the store based on witch the QuestionList component will render answered or unanswered questions  
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
