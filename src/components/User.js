import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../actions/loggedinuser';
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
