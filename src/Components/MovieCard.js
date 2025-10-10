import React from 'react'
import { IMG_URL } from '../Utils/Constant'

const MovieCard = ({posterPath}) => {
    

  return (
    <div className='pr-6 '>
        
        <img src={IMG_URL + posterPath } alt=''/>
      
    </div>
  )
}

export default MovieCard
