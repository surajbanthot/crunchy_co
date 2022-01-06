import React, { useState, useEffect } from "react";
import Image from "next/image";
import Answer from "../../components/Answer";
import Question from "../../components/Question";

const Questionnaire = ({ questions }) => {
  const question_data = [...questions];
  const [count, setCount] = useState(1);
  const [question, setQuestion] = useState(question_data[0]);
  const [showFinished, setShowFinished] = useState(false);

  const nextQuestion = () => {
    // console.log("next Button check");
    // console.log(count)
    if (count < 6) {
      setQuestion({ ...question_data[count] });
      setCount((prevcount) => prevcount + 1);
      // console.log(count)
    } else {
      setShowFinished(true);
    }
  };

  return (
    <>
      <div className="flex flex-col text-center items-center">
        <div className="font-bold mt-12 p-4 text-3xl">
          Help us know you better
        </div>
        {showFinished ? (
          <div className="flex flex-col text-center items-center">
            <div className="m-8">
              Thanks for the info we are curating snacks package for you
            </div>
            <div className="shadow-xl w-40 h-40 rounded-full m-8">
              <Image
                className="rounded-full"
                alt="cooking gif"
                src="/Cooking.gif"
                width="160"
                height="160"
              />
            </div>
          </div>
        ) : (
          <div>
            <Question question={question.question.text} />
            <Answer answer={question.options} />
            <button onClick={nextQuestion}>
              <Image
                alt="Next image"
                src="/next.png"
                className="hover:shadow-md border-2 rounded-full"
                width="90"
                height="90"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Questionnaire;

export async function getStaticProps() {
  // const response = await fetch("http://localhost:3000/api/questions");
  const response = await fetch(
    "https://private-12f623-crunchy.apiary-mock.com/quiz"
  );
  const data = await response.json();
  return {
    props: {
      questions: data,
    },
  };
}

{
  /* <button onClick={prevQuestion}>
            <Image
              alt="previous image"
              src="/previous.png"
              className="w-20 h-20 hover:shadow-xl border-1 rounded-full"
              width="80"
              height="80"
            />
          </button> */
}

// const prevQuestion = () => {
//   if(count<=0) count = question_data.length;
//   count--;
//   console.log(count);
//   setQuestion({ ...question_data[count] });
//   // console.log(count);
//   // if (count > 0) {
//   //   setCount((prevCount) => prevCount - 1);
//   // } else {
//   //   setCount(0);
//   //   alert("this is the beginning of the questionnaire");
//   // }
//   // setQuestion({ ...question_data[count] });
// };
