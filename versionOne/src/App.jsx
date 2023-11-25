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
      <div className="flex h-screen justify-center items-center space-x-5 ">
        <InputField input={input} setInput={setInput} />
        <Button addTodo={addTodo} btnName="Add" btnColor={"btn-error"} />
        <Button addTodo={addTodo} btnName="Update" btnColor={"btn-primary"} />
      </div>
      <div className="">
        <Todo description={todo}  />
      </div>
    </>
  );
};

export default App;
