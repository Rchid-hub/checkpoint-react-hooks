import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import '../App.css'

const MoviesList = ({ movies }) => {
  return (
    <div className="moviesList">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index}/>
      ))}
    </div>
  );
};

export default MoviesList;
