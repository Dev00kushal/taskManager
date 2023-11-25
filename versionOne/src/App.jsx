import React, { useState } from "react";
import InputField from "./Components/InputField";
import Button from "./Components/Button";
import Todo from "./Components/Todo";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    if (input.length !== 0) {
      setTodo([...todo, input]);
      setInput(" ");
    }
  };
  return (
    <>
      <div className="flex mt-10 justify-center items-center space-x-5 ">
        <InputField input={input} setInput={setInput} />
        <Button addTodo={addTodo} btnName="Add" btnColor={"btn-secondary"} />
      </div>
      <div className="ml-9 card w-96 bg-base-100 shadow-xl">
        {todo.map((items, index) => {
          return <Todo key={index} description={items} />;
        })}
      </div>
      <Button btnColor={"bg-white-100 btn-xl"} btnName={"update"} />
    </>
  );
};

export default App;
