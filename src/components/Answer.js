import React, { useState } from 'react';

export default function Answer(props) {
  const [vote, setVote] = useState([]);

  function handleVote(e) {
    alert("E' stato inserito un nome: " + vote);

    e.preventDefault();
  }

  const userAnsweredOne = props.optionOne.votes.includes(props.loggedInUser.id);
  const userAnsweredTwo = props.optionTwo.votes.includes(props.loggedInUser.id);
  console.log(userAnsweredOne);
  console.log(userAnsweredTwo);
  const userAnswered = userAnsweredOne || userAnsweredTwo;
  console.log(userAnswered, 'answered');

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
        <label for="option-one-input">{props.optionOne.text}</label>

        <span>
          {props.optionOne.votes.length} votes -{'  '}
          {votesPercentage(
            props.optionOne.votes.length,
            props.optionTwo.votes.length
          )}
          %
        </span>
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
        <label for="option-two-input">{props.optionTwo.text}</label>
        <span>
          {props.optionTwo.votes.length} votes -{'  '}
          {votesPercentage(
            props.optionTwo.votes.length,
            props.optionOne.votes.length
          )}
          %
        </span>

        {!userAnswered && (
          <button type="submit" value="submit">
            Vote
          </button>
        )}
      </form>
    </>
  );
}
