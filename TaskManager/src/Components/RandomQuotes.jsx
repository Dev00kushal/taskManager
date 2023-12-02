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
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 text-purple-800-800">
        Random Quote
      </h1>

      {quote && (
        <span className="badge primary-badge p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          {quote}
        </span>
      )}
    </motion.div>
  );
};

export default RandomQuotes;
