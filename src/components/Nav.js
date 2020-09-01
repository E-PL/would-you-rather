import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/loggedinuser';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
/**
 * Nav component
 *
 * @description The Nav component renders the navbar. If the user is logged in show the user name and provides a link to log out.
 * @export Component
 * @param {Object} props
 * @param {Object} props.loggedInUser The user currently logged in
 * @returns Children component
 */
export default function MyNav(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <Nav fill variant="pills" defaultActiveKey={location.pathname}>
      <Nav.Item>
        <Nav.Link as={Link} to="/" eventKey="/dashboard">
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/add" eventKey="/add">
          New poll
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/leaderboard" eventKey="/leaderboard">
          Leaderboard
        </Nav.Link>
      </Nav.Item>

      {props.loggedInUser && (
        <>
          <Nav.Item>
            <Nav.Link disabled eventKey="username">
              Hello {props.loggedInUser.name}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              eventKey="logout"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
}
