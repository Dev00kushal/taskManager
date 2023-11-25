import React from "react";

const Todo = ({description,taskName}) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{taskName}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Todo;
