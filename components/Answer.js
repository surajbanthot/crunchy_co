import React from "react";
import { useContext } from "react";

const Answer = ({ answer }) => {
  const capture_data = (e) =>{
    console.log(e.target.value)
  }
  return (
    <div>
      {answer.text.map((text) => {
        // console.log(text);
        return (
          <div key={text.option}>
            <input type='button' value={text.option} onClick={capture_data} className="bg-green-300 rounded-xl shadow-lg p-4 mb-4 hover:bg-green-600">
              {/* {text.option} */}
            </input>
          </div>
        );
      })}
    </div>
  );
};

export default Answer;
