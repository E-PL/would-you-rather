import React from 'react';
import { Link } from 'react-router-dom';

export default function PollCard(props) {
  let questionDate = new Date(props.question.timestamp);
  let questionDateString = questionDate.toLocaleDateString('en-US', {
    timeZone: 'UTC',
  });
  return (
    <>
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
