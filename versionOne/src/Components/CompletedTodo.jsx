import React from "react";
// arko array lagxa
const CompletedTodo = ({ completed }) => {
  return (
    <div>
      {completed.length !== 0 ? (
        completed?.map((value, _) => {
          return (
            <div className="bg-red-500 px-10">
              <li className="text-white">{value}</li>;
            </div>
          );
        })
      ) : (
        <div className=""> Nothing here </div>
      )}
    </div>
  );
};

export default CompletedTodo;
