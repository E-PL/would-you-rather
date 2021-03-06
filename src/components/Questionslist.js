import React from 'react';
import PollCard from './PollCard';
import { Row, Col } from 'react-bootstrap';

/**
 * QuestionList component
 *
 * @description The QuestionList component filter the questions passed as props by their answered status and user selection, and pass ther data by props to the PollCard component.
 * @export Component
 * @param {Object} props
 * @param {Boolean} props.answered The type of poll to show, selected by the user and saved in the store
 * @param {Object} props.questions The questions saved in the store
 * @param {Object} props.users The users saved in store
 * @param {Object} props.loggedInUser The user actually logged in, from the store
 * @returns Children components
 */
export default function QuestionsList(props) {
  // extract an array of polls ids from the questions object
  const questionsKeys = Object.keys(props.questions);
  // extract an array of answered questions from the user object
  const answeredQuestionsKeys = Object.keys(
    props.users[props.loggedInUser.id].answers
  );
  return (
    <>
      <Row>
        <Col>
          <p className="text-center mb-4">
            {props.answered
              ? 'Answered polls selected'
              : 'Unanswered polls selected'}
          </p>
        </Col>
      </Row>
      <Row>
        {props.answered
          ? questionsKeys
              .filter((questionId) => {
                return answeredQuestionsKeys.includes(questionId);
              })
              .sort((a, b) => {
                return (
                  props.questions[b].timestamp - props.questions[a].timestamp
                );
              })
              .map((filteredQuestionId) => {
                return (
                  <Col key={filteredQuestionId}>
                    <PollCard
                      id={filteredQuestionId}
                      question={props.questions[filteredQuestionId]}
                      loggedInUser={props.loggedInUser}
                      users={props.users}
                    />
                  </Col>
                );
              })
          : questionsKeys
              .filter((questionId) => {
                return !answeredQuestionsKeys.includes(questionId);
              })
              .sort((a, b) => {
                return (
                  props.questions[b].timestamp - props.questions[a].timestamp
                );
              })
              .map((filteredQuestionId) => {
                return (
                  <Col key={filteredQuestionId}>
                    <PollCard 
                      id={filteredQuestionId}
                      question={props.questions[filteredQuestionId]}
                      loggedInUser={props.loggedInUser}
                      users={props.users}
                    />
                  </Col>
                );
              })}
      </Row>
    </>
  );
}
