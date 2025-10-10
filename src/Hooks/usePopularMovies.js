import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../Utils/Constant';
import { addPopular } from '../Utils/movieSlice';

const usePopularMovies = () => {
   const dispatch = useDispatch();
      const popularMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular",
          options
        );
        const json = await data.json();
       
        
        
        
        dispatch(addPopular(json.results))
      };
    
      useEffect(() => {
        popularMovies();
      }, []);
}

export default usePopularMovies
