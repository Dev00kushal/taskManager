import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodo([...todo, input.trim()]);
    setInput("");
  };

  return (
    <div className="h-screen flex flex-1 justify-center items-center space-x-3">
      <input
        type="text"
        placeholder="Type here..."
        className="input input-bordered input-accent w-full max-w-xs"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-danger" onClick={addTodo}>
        Add
      </button>

      <div className="bg-red-400 text-white">
        {todo?.map((val, index) => {
          return (
            <div key={index}>
              <li>{val}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
