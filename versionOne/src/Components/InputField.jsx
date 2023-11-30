import React from "react";

const InputField = ({ input, setInput, addTodo }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
    </>
  );
};

export default InputField;
