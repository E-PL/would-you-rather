import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';
export default function Userlist() {
  const users = useSelector((state) => state.users);
  const usersArr = Object.keys(users);
  return (
    <>
      <p>Please select your user</p>
      <ul>
        {usersArr.map((userKey) => {
          return (
            <User
              key={users[userKey].id}
              name={users[userKey].name}
              user={users[userKey]}
            ></User>
          );
        })}
      </ul>
    </>
  );
}
