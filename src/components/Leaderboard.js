import React from 'react';
import { useSelector } from 'react-redux';
import UserStats from './Userstats';

export default function Dashboard(props) {
  const users = useSelector((state) => state.users);
  const usersIds = Object.keys(users);
  return (
    <main>
      {usersIds
        .sort((a, b) => {
          return (
            Object.keys(users[b].answers).length -
            Object.keys(users[a].answers).length
          );
        })
        .map((userId) => {
          return <UserStats key={userId} id={userId} users={users} />;
        })}
    </main>
  );
}
