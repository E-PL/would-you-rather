import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSaveQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';

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
    <main>
      <h2>Your question:</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="option-one">Would you rather...</label>
        <textarea
          onChange={(e) => handleOptionOneTextInput(e.target.value)}
          id="option-one"
          value={optionOneText}
          maxLength={400}
          required
        ></textarea>
        <label htmlFor="option-two"> or </label>
        <textarea
          onChange={(e) => handleOptionTwoTextInput(e.target.value)}
          id="option-two"
          value={optionTwoText}
          maxLength={400}
          required
        ></textarea>

        <button type="submit" value="submit">
          Save poll
        </button>
      </form>
    </main>
  );
}
