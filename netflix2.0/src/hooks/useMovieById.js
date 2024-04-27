import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getTrailerMovie } from '../redux/movieSlice';
import { options } from '../utils/constant';

const useMovieById = async (movieId) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        const getMovieById = async ()=>{
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
                console.log(res.data.results);
                const trailer = res?.data?.results?.filter((item) => {
                    return item.type === "Trailer";
                })
                dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
            } catch (error) {
                console.log(error);
            }
        }
        getMovieById();
    },[])
    
}

export default useMovieById;