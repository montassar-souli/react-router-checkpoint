import React from "react";
import MovieCard from "./MovieCard";
import moviesData from "./data";
import { Link } from "react-router-dom";

const Movies = ({ data }) => {
  return (
    <div className="flex flex-wrap">
      {data.map((movie) => (
        <Link to={`movie/${movie.id}`} key={movie.id}>
          <MovieCard {...movie} />
        </Link>
      ))}
    </div>
  );
};

export default Movies;
