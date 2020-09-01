import React from 'react';
import UserList from './Userlist';
import { Container } from 'react-bootstrap';

/**
 * Login component
 *
 * @description The Login component will be rendered if the user is not logged in. It wrap the Userlist component
 * @export Component
 * @returns Children components
 */
export default function Login() {
  return (
    <Container as="main">
      <UserList />
    </Container>
  );
}
