import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';
import { Row, Col } from 'react-bootstrap';
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
    <Row>
      <Col>
      <h2 className="text-center mt-4">Select user:</h2>
      <Row className="mt-4 text-center">
        {usersArr.map((userKey) => {
          return (
            <User
              key={users[userKey].id}
              name={users[userKey].name}
              user={users[userKey]}
            ></User>
          );
        })}
      </Row>
      </Col>
    </Row>
  );
}
