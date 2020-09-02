import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSaveQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

/**
 * NewQuestion component
 *
 * @description The NewQuestion component is rendered at /add, it renders a form that save the new poll in the store, and redirect to homepage when the poll is submitted.
 * @export Component
 * @param {Object} props
 * @param {Object} props.loggedInUser The user presently logged in
 * @returns Children components
 */
export default function NewQuestion(props) {
  // Use component state to handle form data
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  // Use component state to handle form submission status
  const [submitted, setSubmitted] = useState('');
  const dispatch = useDispatch();
  // When the user types something in the textareas their content is saved to component state
  function handleOptionOneTextInput(text) {
    setOptionOneText(text);
  }
  function handleOptionTwoTextInput(text) {
    setOptionTwoText(text);
  }
  // On form submission dispatch the action that save the new poll in the Redux store
  function handleSubmit(e) {
    e.preventDefault();
    const questionData = {
      author: props.loggedInUser.id,
      optionOneText,
      optionTwoText,
    };
    dispatch(handleSaveQuestion(questionData)).then((res) => {
      // After saving the new poll on the Redux store, set the component state in order to redirect to homepage
      setSubmitted(true);
    });
  }
  return submitted ? (
    <Redirect
      to={{
        pathname: '/',
      }}
    />
  ) : (
    <Container as="main">
      <Row>
        <Col className="m-4 text-center">
          <h2>Your question:</h2>
        </Col>
      </Row>
      <Row  className="justify-content-center">
        <Col className="m-8 text-center " xs="12" sm="8">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formOptionOne">
              <Form.Label>Would you rather..</Form.Label>
              <Form.Control
                size="lg"
                as="textarea"
                rows="3"
                placeholder="Enter option one"
                onChange={(e) => handleOptionOneTextInput(e.target.value)}
                value={optionOneText}
                maxLength={400}
                required
              />
            </Form.Group>
            <Form.Group controlId="formOptionTwo">
              <Form.Label>or..</Form.Label>
              <Form.Control
                size="lg"
                as="textarea"
                rows="3"
                placeholder="Enter option two"
                onChange={(e) => handleOptionTwoTextInput(e.target.value)}
                value={optionTwoText}
                maxLength={400}
                required
              />
            </Form.Group>
            <Button type="submit" className="mt-4" variant="success" value="submit">
              Save poll
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
