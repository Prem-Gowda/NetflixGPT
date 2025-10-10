import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
   

  

  return (
    <div className="p-6">
      <div className="flex overflow-x">
        <h1 className="py-3 text-3xl text-white">{title}</h1>
      </div>
      <div className="flex " >
        
        {movies && movies.map((movie)=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
      </div>
    </div>
  );
};

export default MovieList;
