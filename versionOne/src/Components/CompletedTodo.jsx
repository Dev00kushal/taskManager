import React from "react";

const CompletedTodo = ({ completed }) => {
  return (
    <div>
      {completed.length !== 0 &&
        completed?.map((value, index) => {
          return (
            <div
              key={index}
              className="bg-green-500 text-white px-4 py-2 mb-2 rounded"
            >
              <li>{value}</li>
            </div>
          );
        })}
    </div>
  );
};

export default CompletedTodo;
