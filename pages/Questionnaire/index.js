import React from "react";
import Image from "next/image";
import Answer from "../../components/Answer";
import Question from "../../components/Question";

const Questionnaire = ({ questions }) => {
  return (
    <>
      <div className="flex flex-col text-center items-center">
        <div className="font-bold mt-12 p-4 text-3xl">
          Help us know you better
        </div>
        {
          questions.map((data)=>{
            console.log();
            return (
             <div key={data.question.id}>
               <Question question={data.question.text}/>
               <Answer answer={data.options}/>
             </div>
            )
          })
        }
        <div className="flex">
          <button>
            <Image
            alt="previous image"
              src="/previous.png"
              className="w-20 h-20 hover:shadow-xl border-1 rounded-full" width="80" height="80"
            />
          </button>
          <button>
            <Image
            alt="Next image"
              src="/next.png"
              className="hover:shadow-md border-2 rounded-full" width="90" height="90"
            />
          </button>
        </div>
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
