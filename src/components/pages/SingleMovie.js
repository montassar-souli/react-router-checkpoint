import React from "react";
import { useParams } from "react-router-dom";
import moviesData from "../data";
import BackHome from "../BackHome";
const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);
  const movie = moviesData.find((movie) => movie.id === Number(id));
  console.log(movie.title);
  return (
    <div>
      <BackHome />
      <div className="flex justify-center">
        <img
          className="w-96 rounded-md shadow-xl mt-4"
          src={movie.posterURL}
          alt={movie.title}
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <p className="text-lg">{movie.description}</p>
        <p className="text-lg">Rating: {movie.rating.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default SingleMovie;
