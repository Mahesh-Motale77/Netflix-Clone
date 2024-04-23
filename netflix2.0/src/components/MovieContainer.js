import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const MovieContainer = () => {
  const movieState = useSelector(store => store.movie);
  console.log(movieState.popularMovies);
  
  return (
    <div className='bg-black'>
      <div className='relative z-10'>
         <MovieList title={"Popular Movies"} movies={movieState.popularMovies} />
         <MovieList title={"Now Playing Movies"} movies={movieState.nowPlayingMovies} />
         <MovieList title={"Top Rated Movies"} movies={movieState.topRatedMovies} />
         <MovieList title={"Upcoming Movies"} movies={movieState.upcomingMovies} />
      </div>  
    </div>
  );
}

export default MovieContainer;
