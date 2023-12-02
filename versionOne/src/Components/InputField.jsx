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
        className="input input-bordered w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
    </>
  );
};

export default InputField;
