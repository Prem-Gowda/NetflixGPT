import React from 'react'
import VedioTitle from './VedioTitle';
import VedioBackground from './VedioBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
   

  if (!movies) return;
  const newMovie = movies[0];
  

  const {original_title,overview,id} = newMovie;

  return (
    <div>
        <VedioTitle title ={original_title} description = {overview}/>
        <VedioBackground moviesID={id}/>
      
    </div>
  )
}

export default MainContainer;
