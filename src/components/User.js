import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../actions/loggedinuser';
/**
 * User component
 *
 * @description The User component renders a button that display the user name and dispatch the action to log that user in.
 * @export Component
 * @param {Object} props
 * @param {String} props.name The user name
 * @param {Object} props.user The user object from the store
 * @returns Chuldren components
 */
export default function User(props) {
  const dispatch = useDispatch();

  return (
    <li>
      <button
        onClick={() => {
          dispatch(setLoggedInUser(props.user));
        }}
      >
        {props.name}
      </button>
    </li>
  );
}
