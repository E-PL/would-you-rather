import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Answer from './Answer';
import Notfound from './Notfound';
import {Route} from 'react-router-dom'
import Avatar from './Avatar'

/**
 * Poll component
 *
 * @description The Poll component is rendered when a user visit the route /questions/:pollId. It checks if the pollId is in the question store, and loads the NotFoud component if it isn't. If the poll id is valid, it renders the avatar and the user name, and pass the answer data to Answer component.
 * @export Component
 * @param {Object} props
 * @param {Object} props.loggedInUser The user presently logged in
 * @returns Children components
 */
export default function Poll(props) {
  // Call the React router hook to get access to the location object
  const path = useLocation();
  // Get the match oject from React router to get the '/questions/' part of the url
  const match = useRouteMatch();
  // Extract the final part of the url that shoud be a valid question id
  const questionId = path.pathname.replace(match.path, '');
  // TODO: delete this
  debugger;
  // Subscribe to questions store and get the question object that have the id from the final part of the url
  const question = useSelector((state) => state.questions[questionId]);
  // Get the users from the store
  const users = useSelector((state) => state.users);
  // TODO: delete
  console.log(question);

  return (
    <>
      {questionId}
      {question ? (
        <>
        <Avatar avatarUrl={users[question.author].avatarURL}/>
          <h2>{users[question.author].name} asks:</h2>

          <Answer
            questionId={questionId}
            optionOne={question.optionOne}
            optionTwo={question.optionTwo}
            loggedInUser={props.loggedInUser}
          />
        </>
      ) : (
        <Route path="*" component={Notfound}/>
      )}
    </>
  );
}
