export const API_END_POINT = "http://localhost:8080/api/v1/user";

// options from TMDB api

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGRiZjE2NTRlMDQ1ZDYwZTdlNjkyZTZmZDE0NjEzMyIsInN1YiI6IjY2MjdlZjAyMjIxYmE2MDE2MzE0YzUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_mFSCh_jgpot0NgsLIuk6yNsDTI-rqNBJ8jhhJDZ1M'
  }
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular?api_key=78dbf1654e045d60e7e692e6fd146133";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";


export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
