import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuestionsList from './Questionslist';
import { setDisplayAnsweredQuestions } from '../actions/loggedinuser';
import { Row, Col, Container, Button } from 'react-bootstrap';
/**
 * Dashboard component
 *
 * @description The dashboard component will be rendered for logged in users visiting the homepage.
 * @export Dashboard Component
 * @param {Object} props
 * @param {Object | null} [props.loggedInUser = null] The logged in user object is taken from the store and passed as prop to the dashboard component. If no user is logged in it defaults to null
 * @returns Children components
 */
export default function Dashboard(props) {
  // Grab dispatch reference
  const dispatch = useDispatch();
  // Subscribe to the questions in store
  const questions = useSelector((state) => state.questions);
  // Subscribe to users in store
  const users = useSelector((state) => state.users);
  // Subscribe to displayAnsweredQuestions: the boolean property of loggedInUser in the store based on witch the QuestionList component will render answered or unanswered questions
  const showAnswered = useSelector(
    (state) => state.loggedInUser.displayAnsweredQuestions
  );

  return (
    <Container as="main">
      <Row>
        <Col>
          <h2 className="text-center mt-4 mb-4">Select polls to display:</h2>
        </Col>
      </Row>
      <Row className="justify-content-center  mb-4">
        <Col sx="4" className="text-right m-2">
          <Button
            variant="outline-success"
            disabled={!showAnswered && true}
            onClick={() => {
              dispatch(setDisplayAnsweredQuestions(null));
            }}
          >
            Unanswered
          </Button>
        </Col>
        <Col sx="4" className="text-left m-2">
          <Button
            variant="outline-success"
            disabled={showAnswered && true}
            onClick={() => {
              dispatch(setDisplayAnsweredQuestions(true));
            }}
          >
            Answered
          </Button>
        </Col>
      </Row>

      <QuestionsList
        answered={showAnswered}
        questions={questions}
        loggedInUser={props.loggedInUser}
        users={users}
      />
    </Container>
  );
}
