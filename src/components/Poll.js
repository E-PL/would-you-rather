import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Answer from './Answer';

export default function Poll(props) {
  const path = useLocation();
  const match = useRouteMatch();

  const questionId = path.pathname.replace(match.path, '');
  const question = useSelector((state) => state.questions[questionId]);
  const users = useSelector((state) => state.users);
  console.log(question);

  return (
    <>
      {questionId}
      {question && (
        <>
          <h2>{users[question.author].name} asks:</h2>

          <Answer
            optionOne={question.optionOne}
            optionTwo={question.optionTwo}
            loggedInUser={props.loggedInUser}
          />
        </>
      )}
    </>
  );
}
