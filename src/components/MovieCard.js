import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie, posterPath}) => {
  return (
    <div className='w-48 pr-4' >
        <img src={IMG_CDN_URL + posterPath} alt={movie}></img>
    </div>
  )
}

export default MovieCard