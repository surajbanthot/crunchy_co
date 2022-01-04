import React from "react";

var id=0;
const Answer = ({ answer }) => {
  return (
    <>
      <div>
        {answer.map((ans) => {
          return (
            <>
              <div className="bg-green-300 rounded-xl shadow-lg p-4 mb-4">{ans}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Answer;

