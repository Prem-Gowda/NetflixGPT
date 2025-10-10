import React, { useEffect } from "react";
import { options } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../Utils/movieSlice";
import useNowPlayingTrailerVideo from "../Hooks/useNowPlayingTrailerVideo";

const VedioBackground = ({ moviesID }) => {
    const trailerVideo = useSelector((store)=>store.movies?.nowPlayingTrailer);

    useNowPlayingTrailerVideo(moviesID);
    

  return (
    <div>
      <iframe
       className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
       
      ></iframe>
    </div>
  );
};

export default VedioBackground;
