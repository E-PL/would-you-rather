import React from 'react';
import Avatar from './Avatar';

/**
 * UserStats Component
 *
 * @description The userStats component display user informations on the leaderboard
 * @export Component
 * @param {Object} props
 * @param {String} props.id The user id
 * @param {Object} props.users The users object from the store
 * @returns Children components
 */
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
