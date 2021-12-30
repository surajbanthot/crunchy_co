import React from "react";

const Questionnaire = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <div className="font-bold mt-28 p-4 text-3xl">Help us know you Better</div>
      <div className="p-4 font-semibold text-2xl"> 1. How big is your Organization? </div> 
      <button className="bg-blue border-2">1-10</button>
      <button>10-25</button>
      <button>25-50</button>
      <button>50&gt;</button>
      <div>
          <img src="/next.png" className="w-20 h-20"/>
      </div>
    </div>
  );
};

export default Questionnaire;
