import React from "react";

const InputField = ({input,setInput}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
    </>
  );
};

export default InputField;
