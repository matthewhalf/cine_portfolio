'use client'

import React, { useState, useEffect } from 'react';
import { movieQuotes } from '../data/movieQuotesData';

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
          <p className="text-2xl mb-4 uppercase">"{quote.quote}"</p>
          <p className="movie-info">
            {quote.movie} ({quote.year})
          </p>
        </div>
      </div>
      <button 
        onClick={getRandomQuote} 
        className="mt-6 bg-film text-primary py-2 px-6 text-sm rounded-lg"
      >
        Gimme a quote
      </button>
    </>
  );
};

export default MovieQuotes;