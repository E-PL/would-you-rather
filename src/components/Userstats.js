import React from 'react';
import Avatar from './Avatar';

export default function UserStats(props) {
  return (
    <div>
      <h2>{props.users[props.id].name}</h2>
      <Avatar avatarUrl={props.users[props.id].avatarURL} />
      <p>Questions: {props.users[props.id].questions.length}</p>
      <p>Answers: {Object.keys(props.users[props.id].answers).length}</p>
      <p>
        Score:{' '}
        {props.users[props.id].questions.length +
          Object.keys(props.users[props.id].answers).length}
      </p>
    </div>
  );
}
