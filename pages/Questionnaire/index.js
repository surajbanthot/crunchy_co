import React from "react";
import { useState, useEffect } from "react";

const Questionnaire = ({ questions }) => {
  return (
    <>
      {questions.map((question) => {
        return (
          <div>
            <div key={question.questionText}>{question.questionText}</div>
            <div key={question.answerOptions}>
              {question.answerOptions.map((ans) => {
                return <div key={ans}>{ans}</div>;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Questionnaire;

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/questions");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      questions: data,
    },
  };
}
