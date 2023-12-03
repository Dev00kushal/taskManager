import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputField from "./Components/InputField";
import Button from "./Components/Button";
import Todo from "./Components/Todo";
import CompletedTodo from "./Components/CompletedTodo";
import RandomQuotes from "./Components/RandomQuotes";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [btn, setBtn] = useState("Add");
  const [id, setId] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [status, setStatus] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState([]);
  useEffect(() => {
    const storedTodo = localStorage.getItem("todo");
    const storedCompleted = localStorage.getItem("completed");
    const storedCheckboxStates = localStorage.getItem("checkboxStates");

    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }

    if (storedCompleted) {
      setCompleted(JSON.parse(storedCompleted));
    }

    if (storedCheckboxStates) {
      setCheckboxStates(JSON.parse(storedCheckboxStates));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
    localStorage.setItem("completed", JSON.stringify(completed));
    localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
    setStatus(completed.length > 0);
  }, [completed, checkboxStates]);

  const onUpdate = (index) => {
    setInput(todo[index]);
    setBtn("Update");
    setId(index);
  };

  const handleCheckBox = (index) => {
    setCheckboxStates((prevCheckboxStates) => {
      const updatedCheckboxStates = [...prevCheckboxStates];
      updatedCheckboxStates[index] = !updatedCheckboxStates[index];
      return updatedCheckboxStates;
    });

    const updatedCompleted = [...completed];

    if (!checkboxStates[index]) {
      updatedCompleted.push(todo[index]);
    } else {
      const completedIndex = updatedCompleted.findIndex(
        (item) => item === todo[index]
      );
      updatedCompleted.splice(completedIndex, 1);
    }
    setStatus(!status);
    setCompleted(updatedCompleted);
  };

  const addTodo = () => {
    if (input.length !== 0) {
      if (btn === "Add") {
        setTodo([...todo, input]);
      } else if (btn === "Update") {
        const updatedTodo = [...todo];
        updatedTodo[id] = input;
        setTodo(updatedTodo);
        setId(0);
      }

      setInput("");
      setBtn("Add");
    }
  };

  const deletedTodo = (index) => {
    setCompleted(
      completed?.filter((_, idx) => {
        return index !== idx;
      })
    );
  };
  const deleteTodo = (index) => {
    setTodo(
      todo?.filter((_, idx) => {
        return idx !== index;
      })
    );
    setInput(" ");
    setBtn("Add");
  };

  return (
    <div className="flex flex-col items-center mt-10 mx-4 md:mx-auto md:w-2/3 lg:w-1/2">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-5 w-full"
      >
        <RandomQuotes />
        <InputField input={input} setInput={setInput} addTodo={addTodo} />
        <Button
          addTodo={addTodo}
          btnName={btn}
          btnColor="btn-secondary"
          btn={btn}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-5 card w-full bg-base-100 shadow-xl p-4"
      >
        <AnimatePresence>
          {todo?.length !== 0 ? (
            todo?.map((items, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between mb-3"
              >
                <input
                  type="checkbox"
                  checked={checkboxStates[index] || false}
                  onChange={() => handleCheckBox(index)}
                  className="checkbox mb-2 md:mb-0"
                />
                <Todo description={items} />
                <Button
                  btnColor="btn-error btn-xl"
                  btnName="Delete"
                  deleteTodo={() => deleteTodo(index)}
                />
                <Button
                  btnColor="bg-blue-500 hover:bg-blue-600 text-white"
                  btnName="Update"
                  onUpdate={() => onUpdate(index)}
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
      <motion.div
        className="flex justify-center items-center mt-10 rounded-lg p-6 shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {status && (
          <CompletedTodo completed={completed} deletedTodo={deletedTodo} />
        )}
      </motion.div>
    </div>
  );
};

export default App;
