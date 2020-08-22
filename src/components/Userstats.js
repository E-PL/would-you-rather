import React from 'react';

export default function UserStats(props) {
  return (
    <div>
      <h2>{props.users[props.id].name}</h2>
      <p>Answers: {Object.keys(props.users[props.id].answers).length}</p>
    </div>
  );
}
