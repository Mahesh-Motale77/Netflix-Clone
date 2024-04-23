import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  console.log(movies);
    if (!movies) {
        return (
          <div className='px-8'>
            <h1 className='text-3xl text-white'>{title}</h1>
            <p className='text-white'>Loading...</p>
          </div>
        );
      }
  return (
    <div className='px-8'>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
        {
            movies.map((movie)=>{
                return(
                    <MovieCard key= {movie.id} posterPath= {movie.poster_Path} />
                )
            })
        }
        </div>
      </div>
    </div>
  )
}

export default MovieList
