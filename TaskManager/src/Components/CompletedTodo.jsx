import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
const CompletedTodo = ({ completed, deletedTodo }) => {
  return (
    <div className="completed-todo-container">
      <h1 className="text-3xl font-bold mb-4 text-purple-800">
        Completed Todo
      </h1>

      <AnimatePresence>
        <motion.div
          className="completed-todo-list grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {completed?.map((value, index) => (
            <motion.div
              key={index}
              className="completed-todo-item bg-green-600 text-white px-4 py-2 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{value}</span>
              <Button
                deletedTodo={()=> deletedTodo(index)}
                btnColor={"btn-error"}
                btnName={"Delete"}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CompletedTodo;
