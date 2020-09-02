import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { Card, Button } from 'react-bootstrap';
/**
 * PollCard component
 *
 * @description The PollCard component display poll information passed by props by the QuestionsList component.
 * @export Component
 * @param {Object} props
 * @param {string} props.id The poll id
 * @param {Object} props.question The question object saved in the store
 * @param {Object} props.loggedInUser The user logged in, from the store
 * @param {Object} props.users The users saved in the store
 * @returns Children Components
 */
export default function PollCard(props) {
  let questionDate = new Date(props.question.timestamp);
  let questionDateString = questionDate.toLocaleDateString('en-US', {
    timeZone: 'UTC',
  });
  return (
    <Card style={{ minWidth: '222px' }} className="mb-4 text-center">
      <Card.Body>
      <Card.Header>
      {props.users[props.question.author].name}   
      </Card.Header>
        <Card.Img
          variant="top"
          as={Avatar}
          name={props.users[props.question.author].name}
          avatarUrl={props.users[props.question.author].avatarURL}
        />
        <Card.Text className="mb-3 mt-3">
       asked on {questionDateString}
        </Card.Text>
        <Card.Subtitle className="mb-3 mt-3 text-muted">
        Would you rather...
        </Card.Subtitle>
       

        
        <Link className="float-right"
          to={{
            pathname: `/questions/${props.question.id}`,
          }}
        >
          <Button variant="success">View poll</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
