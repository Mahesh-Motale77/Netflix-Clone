import React from 'react'
import MovieList from './MovieList'

const MovieContainer = () => {
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
         <MovieList/>
      </div>  
    </div>
  )
}

export default MovieContainer
