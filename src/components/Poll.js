import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Answer from './Answer';
import Notfound from './Notfound';
import { Route } from 'react-router-dom';
import Avatar from './Avatar';
import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * Poll component
 *
 * @description The Poll component is rendered when a user visit the route /questions/:pollId. It checks if the pollId is in the question store, and loads the NotFoud component if it isn't. If the poll id is valid, it renders the avatar and the user name, and pass the answer data to Answer component.
 * @export Component
 * @param {Object} props
 * @param {Object} props.loggedInUser The user presently logged in
 * @returns Children components
 */
export default function Poll(props) {
  // Call the React router hook to get access to the location object
  const path = useLocation();
  // Get the match oject from React router to get the '/questions/' part of the url
  const match = useRouteMatch();
  // Extract the final part of the url that shoud be a valid question id
  const questionId = path.pathname.replace(match.path, '');

  // Subscribe to questions store and get the question object that have the id from the final part of the url
  const question = useSelector((state) => state.questions[questionId]);
  // Get the users from the store
  const users = useSelector((state) => state.users);
  let questionDate = question ? new Date(question.timestamp) : null;
  let questionDateString = question
    ? questionDate.toLocaleDateString('en-US', {
        timeZone: 'UTC',
      })
    : null;

  return (
    <>
      {question ? (
        <Container as="main">
          <Row>
            <Col>
              <Card
                style={{ minWidth: '222px', maxWidth: '300px', margin: 'auto' }}
                className="mb-4 mt-4 text-center"
              >
                <Card.Body>
                  <Card.Header>{users[question.author].name}</Card.Header>
                  <Card.Img
                    variant="top"
                    as={Avatar}
                    name={users[question.author].name}
                    avatarUrl={users[question.author].avatarURL}
                  />
                  <Card.Text className="mb-3 mt-3">
                    asked on {questionDateString}
                  </Card.Text>
                  <Card.Subtitle className="mb-3 mt-3 text-muted">
                    Would you rather...
                  </Card.Subtitle>
                  <Card.Text as="div" className="mb-3 mt-3">
                    <Answer
                      questionId={questionId}
                      optionOne={question.optionOne}
                      optionTwo={question.optionTwo}
                      loggedInUser={props.loggedInUser}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Route path="*" component={Notfound} />
      )}
    </>
  );
}
