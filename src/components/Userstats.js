import React from 'react';
import Avatar from './Avatar';
import { Col, Card } from 'react-bootstrap';

/**
 * UserStats Component
 *
 * @description The userStats component display user informations on the leaderboard
 * @export Component
 * @param {Object} props
 * @param {String} props.id The user id
 * @param {Object} props.users The users object from the store
 * @returns Children components
 */
export default function UserStats(props) {
  return (
    <Col>
      <Card
        style={{ minWidth: '222px', maxWidth: '300px', margin: 'auto' }}
        className="mb-4 text-center justify-content-center"
      >
        <Card.Body>
        <Card.Header>{props.users[props.id].name}</Card.Header>
        <Card.Img
          className="text-center justify-content-center"
          variant="top"
          as={Avatar}
          name={props.users[props.id].name}
          avatarUrl={props.users[props.id].avatarURL}
        />

        <Card.Text className="mt-4">
          Questions: {props.users[props.id].questions.length}
        </Card.Text>
        <Card.Text>
          Answers: {Object.keys(props.users[props.id].answers).length}
        </Card.Text>
        <Card.Text>
          Score:{' '}
          {props.users[props.id].questions.length +
            Object.keys(props.users[props.id].answers).length}
        </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
