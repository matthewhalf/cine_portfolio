'use client'

import React, { useState, useEffect } from 'react';
import { movieQuotes } from '../data/movieQuotesData';
import { motion } from "framer-motion"

const MovieQuotes = () => {
  const [quote, setQuote] = useState(null);
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * movieQuotes.length);
    setQuote(movieQuotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  if (!quote) return <div>Loading...</div>;

  return (
    <>
      <div className="bg-primary w-[90%] m-auto rounded p-4 mt-8 text-film text-center relative overflow-hidden">
        <div className="grain"></div>
        <div className="relative z-10">
          <p className="text-xl mb-4 uppercase">"{quote.quote}"</p>
          <p className="text-sm">
            {quote.movie} ({quote.year})
          </p>
        </div>
      </div>
      <motion.button  whileTap={{ scale: 0.9 }} onClick={getRandomQuote} 
        className="mt-6 bg-film text-primary py-2 px-6 text-sm rounded-lg">
        Gimme a quote
      </motion.button>

      <p className="text-primary my-20 text-center">
    hey im Matthew, a frontend developer with a passion for cinema  based in Italy
    </p>

    <div className="h-[5px] w-[90%] bg-primary rounded-lg mt-4"></div>
    </>
  );
};

export default MovieQuotes;