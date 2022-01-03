import React from "react";
import { useEffect } from "react";

const Questionnaire = () => {


  useEffect(async () => {
    const quest_arr = []; //array of all the questions
    const quest_ans = []; //array of all the answers for the question
    const response = await fetch("/api/Questions");
    const data = await response.json();
    data.map((quest_and_ans) => {
      quest_arr.push(quest_and_ans.questionText);
    
    });
  }, []);
  return (
    <div className="flex flex-col text-center items-center">
      <div className="font-bold mt-12 p-4 text-3xl">
        Help us know you better
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
};;

export default Questionnaire;


//  quest_and_ans.answers.map((ans_opt) => {
//    quest_ans.push(ans_opt);
//  });