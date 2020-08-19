import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../actions/loggedinuser';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const dispatch = useDispatch();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/">New poll</Link>
        </li>
        <li>
          <Link to="/">Leaderboard</Link>
        </li>
        {props.loggedInUser && (
          <li>
            Hi {props.loggedInUser.name}{' '}
            <button
              onClick={() => {
                dispatch(setLoggedInUser(null));
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
