import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const moviesPlaying = useSelector((store)=>store.movies);
  return (
    <div className='bg-black'>
        <div className='-mt-40 relative z-20'>
            <MovieList title={"Now Playing"} movies={moviesPlaying.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={moviesPlaying.nowPopular}/>
        </div>
      
    </div>
  )
}

export default SecondaryContainer;
