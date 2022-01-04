import React from "react";
import { useState, useEffect } from "react";
import Answer from "../../components/Answer";
import Question from "../../components/Question";

const Questionnaire = ({ questions }) => {
  return (
    <>
      <div className="flex flex-col text-center items-center">
        <div className="font-bold mt-12 p-4 text-3xl">
          Help us know you better
        </div>
        {questions.map((question_and_options) => {
          return (
            <div>
              <Question question={question_and_options.questionText} />
              <Answer answer={question_and_options.answerOptions} />
            </div>
          );
        })}
        <div className="flex">
          <button>
            <img
              src="/previous.png"
              className="w-20 h-20 hover:shadow-xl border-1 rounded-full"
            />
          </button>
          <button>
            <img
              src="/next.png"
              className="w-20 h-20 hover:shadow-xl border-1 rounded-full"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Questionnaire;

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/questions");
  const data = await response.json();
  return {
    props: {
      questions: data,
    },
  };
}
