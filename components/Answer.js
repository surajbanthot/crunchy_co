import React from "react";

var id = 0;
const Answer = ({ answer }) => {
  return (
    <div>
      {answer.text.map((text) => {
        console.log(text);
        return <div key={text.option} className="bg-green-300 rounded-xl shadow-lg p-4 mb-4">{text.option}</div>;
      })}
    </div>
  );
};

export default Answer;
