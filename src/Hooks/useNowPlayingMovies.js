import React, { useEffect } from 'react'
import { options } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addMovies } from '../Utils/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const moviesPlayingNow = async ()=>{
    
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
  const json = await data.json();
  
  dispatch(addMovies(json.results))

};

useEffect(()=>{
  moviesPlayingNow()

},[])
  
    
}

export default useNowPlayingMovies;

