import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        console.log(idx, index);
        return idx !== index;
      })
    );
    setBtn("Delete");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex space-x-5"
      >
        <InputField input={input} setInput={setInput} />
        <Button
          addTodo={addTodo}
          btnName="Add"
          btnColor="btn-secondary"
          btn={btn}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-5 card w-96 bg-base-100 shadow-xl p-4 "
      >
        <AnimatePresence>
          {todo.length !== 0 ? (
            todo.map((items, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between mb-3"
              >
                <Todo description={items} />
                <Button
                  btnColor="btn-error btn-xl"
                  btnName="Delete"
                  deleteTodo={() => deleteTodo(index)}
                />
                <Button
                  btnColor="bg-blue-500 hover:bg-blue-600 text-white"
                  btnName="Update"
                />
              </motion.div>
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
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
