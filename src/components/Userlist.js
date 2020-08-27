import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';
/**
 * UserList component
 * 
 * @description The UserList component is a child of the Login component, it maps the users in store and renders a list of User components with the resulting data.
 * @export Component
 * @returns Children components
 */
export default function Userlist() {
  // Subscribe to the users in the store
  const users = useSelector((state) => state.users);
  // Extract an array of user ids from the users object
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
