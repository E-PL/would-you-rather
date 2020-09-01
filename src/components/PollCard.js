import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar'

/**
 * PollCard component
 *
 * @description The PollCard component display poll information passed by props by the QuestionsList component.
 * @export Component
 * @param {Object} props
 * @param {string} props.id The poll id
 * @param {Object} props.question The question object saved in the store
 * @param {Object} props.loggedInUser The user logged in, from the store
 * @param {Object} props.users The users saved in the store
 * @returns Children Components
 */
export default function PollCard(props) {
  let questionDate = new Date(props.question.timestamp);
  let questionDateString = questionDate.toLocaleDateString('en-US', {
    timeZone: 'UTC',
  });
  return (
    <>
      <Avatar name={props.users[props.question.author].name} avatarUrl={props.users[props.question.author].avatarURL}/>
      <h2>
        {props.users[props.question.author].name} asked on {questionDateString}
      </h2>
      <p>Would you rather:</p>
      <p>{props.question.optionOne.text}</p>
      <p>or</p>
      <p>{props.question.optionTwo.text}</p>
      <p>?</p>
      <Link
        to={{
          pathname: `/questions/${props.question.id}`,
        }}
      >
        View poll
      </Link>
    </>
  );
}
