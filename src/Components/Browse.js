import React, { useEffect } from 'react'
import Header from './Header'
import { options } from '../Utils/Constant'

const Browse = () => {
const moviesPlayingNow = async ()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
  const json = await data.json();
  console.log(json);
}

useEffect(()=>{
  moviesPlayingNow()

},[])

  return (
   <Header/>
  )
}

export default Browse
