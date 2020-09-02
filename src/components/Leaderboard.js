import React from 'react';
import { useSelector } from 'react-redux';
import UserStats from './Userstats';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Leaderboard Component
 *
 * @description The Leaderboard component is rendered at /leaderboard route, it sorts users by answers + questions and return a list of UserStats components ordered by score.
 * @export Component
 * @param {Object} props
 * @param {Object} props.loggedInUser The user currently logged in
 * @returns Children components
 */

export default function Leaderboard() {
  // Get the user object from Redux store
  const users = useSelector((state) => state.users);
  // Extract an array of user ids
  const usersIds = Object.keys(users);
  return (
    <Container as="main">
      <Row className="mt-4">
        <Col className="text-center">
        <h2 className="mt-4">Leaderboard</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        {usersIds
          .sort((a, b) => {
            return (
              Object.keys(users[b].answers).length +
              users[b].questions.length -
              (Object.keys(users[a].answers).length + users[a].questions.length)
            );
          })
          .map((userId) => {
            return <UserStats key={userId} id={userId} users={users} />;
          })}
      </Row>
    </Container>
  );
}
