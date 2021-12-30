import React from "react";
import { useState } from "react";
const Questionnaire = () => {
  const [value, setValue] = useState();
  return (
    <div className="flex flex-col text-center items-center">
      <div className="font-bold mt-12 p-4 text-3xl">
        Help us know you Better
      </div>
      <div className="p-4 font-semibold text-2xl m-8 ">
        1. How big is your Organization?
      </div>
      <div>
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
      </div>
      <div className="flex flex-col">
        <img src="/next.png" className="w-20 h-20" />
      </div>
    </div>
  );
};

export default Questionnaire;
