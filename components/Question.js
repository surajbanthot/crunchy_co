import React from 'react'

const Question = ({question}) => {
    return (
      <>
        <div className="p-4 font-semibold text-2xl m-8 border-2 rounded-md bg-green-100">
        <div key={question}>{question}</div>
        </div>
      </>
    );
}

export default Question
