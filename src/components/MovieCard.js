import React, { useState } from "react";

const MovieCard = ({ title, posterURL, rating }) => {
  return (
    <div className="w-64 m-4 bg-indigo-900 rounded shadow-black overflow-hidden relative">
      <img className="max -w-full" src={posterURL} alt="title" />
      <div className="flex p-2 justify-between items-center ">
        <h3 className="m-0">{title}</h3>
        <span>{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default MovieCard;
