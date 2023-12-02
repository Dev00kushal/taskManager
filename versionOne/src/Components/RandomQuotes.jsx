import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const RandomQuotes = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        const { content, author } = response.data;
        const formattedQuote = `"${content}" - ${author}`;
        setQuote(formattedQuote);
      } catch (error) {
        console.error("Error fetching quote:", error.message);
      }
    };

    fetchQuote();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="random-quotes-container bg-gray-100 p-5 rounded-md shadow-md mx-4 md:mx-20 lg:mx-32 xl:mx-48 mt-8 mb-8"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Random Quote Generator</h1>
        <motion.blockquote
          className="text-lg text-gray-700"
          animate={{ scale: [0.8, 1] }}
          transition={{ duration: 0.5 }}
        >
          {quote && (
            <span className="badge primary-badge p-6 md:p-10">{quote}</span>
          )}
        </motion.blockquote>
      </div>
    </motion.div>
  );
};

export default RandomQuotes;
