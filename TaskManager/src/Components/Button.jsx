import React from "react";
import { motion } from "framer-motion";

const Button = ({
  addTodo,
  btnName,
  btnColor,
  deleteTodo,
  btn,
  onUpdate,
  deletedTodo,
}) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`btn ${btnColor}`}
        onClick={btn ? addTodo : deleteTodo || onUpdate || deletedTodo}
      >
        {btnName}
      </motion.button>
    </>
  );
};

export default Button;
