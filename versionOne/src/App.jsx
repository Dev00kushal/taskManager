import React, { useState } from "react";
import InputField from "./Components/InputField";
import Button from "./Components/Button";
import Todo from "./Components/Todo";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [btn, setBtn] = useState("Add");

  const addTodo = () => {
    if (input.length !== 0) {
      setTodo([...todo, input]);
      setInput("");
    }
  };
  const deleteTodo = (index) => {
    setTodo(
      todo?.filter((_, idx) => {
        return idx !== index;
      })
    );
    console.log(index, todo);
    setBtn("Delete");
  };

  return (
    <>
      <div className="flex mt-10 justify-center items-center space-x-5">
        <InputField input={input} setInput={setInput} />
        <Button
          addTodo={addTodo}
          btnName="Add"
          btnColor="btn-secondary"
          btn={btn}
        />
      </div>

      <div className="ml-9 card w-96 bg-base-100 shadow-xl">
        {todo.length !== 0 ? (
          todo.map((items, index) => (
            <div key={index} className="flex items-center justify-between">
              <Todo description={items} />
              <Button
                btnColor="bg-erro-100 btn-xl"
                btnName="Delete"
                deleteTodo={() => deleteTodo(index)}
              />
            </div>
          ))
        ) : (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Missing Todos! No Todos Found</span>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
