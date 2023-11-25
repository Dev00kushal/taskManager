import React from "react";

const Todo = ({ description }) => {
  return (
    <>
      <div className="card-body">
        <p>{description}</p>
      </div>
    </>
  );
};

export default Todo;
