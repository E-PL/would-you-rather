import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSetAnswer, handleSetAnswerTwo } from '../actions/shared';

/**
 * Answer Component
 *
 * @description The answer component is a children of Poll component and display the poll answers. If the poll is already answered by the current user it display stats, if it's not answered it provides the form to answer it.
 * @export Component
 * @param {Object} props
 * @param {String} props.questionId the poll id
 * @param {Object} props.optionOne the poll optionOne object
 * @param {Object} props.optionTwo the poll optionTwo object
 * @param {Object} props.loggedInUser the user currently logged in
 * @returns Children components
 */
export default function Answer(props) {
  const dispatch = useDispatch();
  // Use React useState Hook to handle form state: it's relative to this component and not needed in the rest of the app, and it doesn't need to be persistent if the user navigate aroud the app, so using redux to handle it would be overkill
  const [vote, setVote] = useState([]);
  // Handle form submit
  
  function handleVote(e) {
    e.preventDefault();
    const userAnswersOne = vote === 'OptionOne';

    if (userAnswersOne) {
      dispatch(
        handleSetAnswer({
          questionId: props.questionId,
          userId: props.loggedInUser.id,
          vote: 'optionOne',
        })
      );
    }

    if (!userAnswersOne) {
      dispatch(
        handleSetAnswer({
          questionId: props.questionId,
          userId: props.loggedInUser.id,
          vote: 'optionTwo',
        })
      );
    }
  }

  // Decide if the user already answered the poll and what his answer was
  const userAnsweredOne = props.optionOne.votes.includes(props.loggedInUser.id);
  const userAnsweredTwo = props.optionTwo.votes.includes(props.loggedInUser.id);
  const userAnswered = userAnsweredOne || userAnsweredTwo;

  // Given two numbers, returns the percentage of the first relative to the total
  function votesPercentage(a, b) {
    if (a === 0) return 0;
    if (b === 0) return 100;
    const total = a + b;
    return (100 * a) / total;
  }

  return (
    <>
      <h2>Would you rather...</h2>
      <form onSubmit={(e) => handleVote(e)}>
        {userAnsweredOne && <span>Your answer:</span>}
        <input
          type="radio"
          id="option-one-input"
          name="answer"
          value="OptionOne"
          defaultChecked={userAnsweredOne}
          disabled={userAnswered}
          onChange={(e) => setVote(e.target.value)}
        />
        <label htmlFor="option-one-input">{props.optionOne.text}</label>

        {userAnswered && (
          <span>
            {props.optionOne.votes.length} votes -{'  '}
            {votesPercentage(
              props.optionOne.votes.length,
              props.optionTwo.votes.length
            )}
            %
          </span>
        )}
        {userAnsweredTwo && <span> Your answer:</span>}
        <input
          type="radio"
          id="option-two-input"
          name="answer"
          value="optionTwo"
          defaultChecked={userAnsweredTwo}
          disabled={userAnswered}
          onChange={(e) => setVote(e.target.value)}
        />
        <label htmlFor="option-two-input">{props.optionTwo.text}</label>
        {userAnswered && (
          <span>
            {props.optionTwo.votes.length} votes -{'  '}
            {votesPercentage(
              props.optionTwo.votes.length,
              props.optionOne.votes.length
            )}
            %
          </span>
        )}
        {!userAnswered && (
          <button type="submit" value="submit">
            Vote
          </button>
        )}
      </form>
    </>
  );
}
