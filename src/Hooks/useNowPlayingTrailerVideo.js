import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../Utils/Constant';
import { addTrailer } from '../Utils/movieSlice';

const useNowPlayingTrailerVideo = (moviesID) => {
    const dispatch = useDispatch();
      const backgroundVideoPlaying = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+moviesID+"/videos?language=en-US",
          options
        );
        const json = await data.json();
        
        const filteredData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        
        dispatch(addTrailer(trailer))
      };
    
      useEffect(() => {
        backgroundVideoPlaying();
      }, []);
  
  
}

export default useNowPlayingTrailerVideo
