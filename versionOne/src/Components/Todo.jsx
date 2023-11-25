import React from "react";

const Todo = ({ description }) => {
  return (
    <div className="border rounded p-3 shadow-md bg-white ">
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default Todo;
