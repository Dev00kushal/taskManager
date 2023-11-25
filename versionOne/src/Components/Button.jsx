import React from "react";
const Button = ({ addTodo, btnName, btnColor, deleteTodo,btn}) => {
  return (
    <>
      <button
        className={`btn ${btnColor}`}
        onClick={btn? addTodo : deleteTodo}
      >
        {btnName}
      </button>
    </>
  );
};

export default Button;
