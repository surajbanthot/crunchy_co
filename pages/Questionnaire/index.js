import React from "react";
import { useState, useEffect } from "react";

const Questionnaire = () => {
  const [question, setQuestion]=useState({});
  const [answer, setAnswer] = useState([]);
  useEffect(async () => {
    const response = await fetch("/api/questions");
    const data = await response.json();
    // console.log(data.questions)
    data.questions.map(quest_ans=>{
      
      //------//
      //question and answers in whole are pulled as quest_ans;
      //-----//
      
      //individual questions in quest_ans.question
      console.log(quest_ans.question);
      setQuestion(quest_ans.question)

      //all the individaul answers pulled by mapping
      
      quest_ans.answers.map((ans_opt) => {
        // console.log(ans_opt);
      });
    })
  }, []);

  return (
    <div className="flex flex-col text-center items-center">
      <div className="font-bold mt-12 p-4 text-3xl">
        Help us know you Better {question}
      </div>
      <div className="p-4 font-semibold text-2xl m-8 "></div>
      {/* <div>
        <button className="bg-green-300 rounded-xl shadow-lg p-4 mb-4">
          1-10
        </button>
      </div>
      <div>
        <button className="bg-green-300 rounded-xl shadow-lg p-4 mb-4">
          10-25
        </button>
      </div>
      <div>
        <button className="bg-green-300 rounded-xl shadow-lg p-4 mb-4">
          25-50
        </button>
      </div>
      <div>
        <button className="bg-green-300 rounded-xl shadow-lg p-4 mb-4">
          50&gt;
        </button>
      </div> */}

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
  );
};

export default Questionnaire;
