import React, {useEffect} from 'react';
import PollCard from './PollCard';

export default function QuestionsList(props) {
  const questionsKeys = Object.keys(props.questions);
  const answeredQuestionsKeys = Object.keys(props.users[props.loggedInUser.id].answers);
  return (
    <main>
      <h2>{props.answered ? 'Answered polls' : 'Unanswered polls'}</h2>
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
               
                  <PollCard
                  key={filteredQuestionId}
                    id={filteredQuestionId}
                    question={props.questions[filteredQuestionId]}
                    loggedInUser={props.loggedInUser}
                    users={props.users}
                  />
               
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
              
                  <PollCard
                  key={filteredQuestionId}
                    id={filteredQuestionId}
                    question={props.questions[filteredQuestionId]}
                    loggedInUser={props.loggedInUser}
                    users={props.users}
                  />
                
              );
            })}
    </main>
  );
}
