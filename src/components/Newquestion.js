import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions'

export default function NewQuestion(props) {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  const dispatch = useDispatch();
  function handleOptionOneTextInput(text) {
    console.log('change_One');
    setOptionOneText(text);
  }
  function handleOptionTwoTextInput(text) {
    console.log('change_One');
    setOptionTwoText(text);
  }
  function handleSubmit(e) {
    console.log('Submitted form');
    e.preventDefault();
   const questionData = {
      'author': props.loggedInUser.id,
      optionOneText,
      optionTwoText
    }
    dispatch(handleSaveQuestion(questionData));
  }
  return (
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
