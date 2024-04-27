import React, { useState } from 'react';
import axios from 'axios';
import { Search_Movie_URL, options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.app.isLoading);
  const {movieName, searchedMovie} = useSelector(store => store.searchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`${Search_Movie_URL}${searchMovie}`, options);     // something bakiii
      console.log(res.data);
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    }
    finally{
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  }

  return (
  <>
  
    <div className='flex justify-center pt-[10%] w-[100%]'>
      <form onSubmit={submitHandler} className='w-[50%]'>
        <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
          <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} type="text" className='w-full outline-none rounded-md text-lg' placeholder="Search Movies..." />
          <button className='bg-red-800 text-white rounded-md px-2'>{isLoading? "loading..." : "search"}</button>
        </div>
      </form>
    </div>
    {
      searchedMovie !== null ? (<MovieList title={movieName} searchMovie={true} movies={searchedMovie} />) : (<h1>Movie Not Found !!!</h1>)
    }

    {/* <MovieList title={movieName} searchMovie={true} movies={searchedMovie} /> */}

    </>
  )
}

export default SearchMovie
