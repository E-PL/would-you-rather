import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/loggedinuser';
import { Link } from 'react-router-dom';

/**
 * Nav component
 *
 * @description The Nav component renders the navbar. If the user is logged in show the user name and provides a link to log out.
 * @export Component
 * @param {Object} props
 * @param {Object} props.loggedInUser The user currently logged in
 * @returns Children component
 */
export default function Nav(props) {
  const dispatch = useDispatch();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/add">New poll</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        {props.loggedInUser && (
          <li>
            Hi {props.loggedInUser.name}{' '}
            <button
              onClick={() => {
                dispatch(logout());
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
