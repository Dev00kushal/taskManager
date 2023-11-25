import React from "react";
const Button = ({addTodo,btnName,btnColor}) => {
  return (
    <>
      <button className={`btn ${btnColor}`}
         onClick={addTodo}
      
      >{btnName}</button>
    </>
  );
};

export default Button;
