import React from "react";
import { motion } from "framer-motion";

const Button = ({ addTodo, btnName, btnColor, deleteTodo, btn }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`btn ${btnColor}`}
        onClick={btn ? addTodo : deleteTodo}
      >
        {btnName}
      </motion.button>
    </>
  );
};

export default Button;
