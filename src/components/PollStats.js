import React from 'react';

import { ProgressBar, Card, Badge } from 'react-bootstrap';

/**
 * AnswerStats Component
 *
 * @description The AnswerStats component is a children of Answer component and display the poll answers stats.
 * @export Component
 * @param {Object} props
 * @param {Number} props.votesForOne The number of votes for option one
 * @param {Number} props.votesForTwo The number of votes for option two
 * @param {Number} props.percentageForOne The percentage of votes for option one
 * @param {Number} props.percentageForTwo The percentage of votes for option two
 * @param {Bool}   props.userAnsweredOne The current user answer, if false the user answered two
 * @param {String} props.textForOne The text of the first option
 * @param {String} props.textForTwo The text of the second option
 * @returns Children components
 */
export default function PollStats(props) {
  return (
    <>
      <Card className="mt-4 text-center">
        <Card.Header as="h3">Results</Card.Header>

        <Card className="m-2 text-center" bg="light">
          <Card.Header>{props.textForOne}</Card.Header>
          <Card.Text className="m-2">
            {props.userAnsweredOne && (
              <Badge className="m-1" variant="info">
                Your answer
              </Badge>
            )}
          </Card.Text>
          {props.percentageForOne.toFixed(0) > 0 ? (
            <>
              <Card.Text as="div" className="m-2">
                <ProgressBar
                  label={`${props.percentageForOne.toFixed(0)}%`}
                  variant={
                    props.percentageForOne >= props.percentageForTwo
                      ? 'success'
                      : 'warning'
                  }
                  now={props.percentageForOne}
                />
              </Card.Text>
              <Card.Text className="m-2">
                {props.votesForOne} out of{' '}
                {props.votesForOne + props.votesForTwo} votes
              </Card.Text>
            </>
          ) : (
            <Card.Text as="div" className="m-2">
              No votes
            </Card.Text>
          )}
        </Card>

        <Card className="m-2 text-center" bg="light">
          <Card.Header>{props.textForTwo}</Card.Header>
          {!props.userAnsweredOne && (
            <Card.Text>
              <Badge className="m-1" variant="info">
                Your answer
              </Badge>
            </Card.Text>
          )}
          {props.percentageForTwo.toFixed(0) > 0 ? (
            <>
              <Card.Text as="div" className="m-2">
                <ProgressBar
                  label={`${props.percentageForTwo.toFixed(0)}%`}
                  variant={
                    props.percentageForTwo >= props.percentageForOne
                      ? 'success'
                      : 'warning'
                  }
                  now={props.percentageForTwo}
                />
              </Card.Text>
              <Card.Text className="m-2">
                {props.votesForTwo} out of{' '}
                {props.votesForOne + props.votesForTwo} votes
              </Card.Text>
            </>
          ) : (
            <Card.Text as="div" className="m-2">
              No votes
            </Card.Text>
          )}
        </Card>
      </Card>
    </>
  );
}
