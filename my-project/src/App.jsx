import React, { useState } from "react";

const App = () => {

// map,filter,reduce,some

  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);
  const [input, setInput] = useState("");
  const [todoState, setTodoState] = useState("Add");
  const addTodo = () => {
    if (input.length !== 0) {
      setTodo([
        ...todo,
        {
          id,
          todo: input.trim(),
        },
      ]);
      setId(id + 1);
      console.log(id);
      setInput("");
    }
  };
  const deleteButton = (index) => {
    setTodo(
      todo?.filter((_, idx) => {
        return idx !== index;
      })
    );
  };

  const updateValueInput = (index) => {
    setInput(todo[index].todo);
    setId(index);
    setTodoState("Update");
  };

  const updateValue = () => {
    const updatedTodo = todo.map((value) => {
      if (id === value.id) {
        value.todo = input;
      }
      return value;
    });
    setTodo(updatedTodo);
    setTodoState("Add");
    setInput("")
    setId(todo.length)
  console.log(todo)  
  };

  return (
    <div className="h-screen flex flex-1 justify-center items-center space-x-3">
      <h1>{id}</h1>
      <input
        type="text"
        placeholder="Type here..."
        className="input input-bordered input-accent w-full max-w-xs"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {todoState == "Add" ? (
        <button className="btn btn-danger" onClick={addTodo}>
          Add
        </button>
      ) : (
        <button className="btn btn-danger" onClick={updateValue}>
          Update
        </button>
      )}

      <div className=" text-white ">
        {todo?.map((val, index) => {
          return (
            <div key={index}>
              <li>{val.todo}</li>
              <button
                className="btn btn-error btn-sm"
                onClick={() => deleteButton(index)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary btn-sm ml-5"
                onClick={() => updateValueInput(index)}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
