import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMoives : null,
        toggle : false,
    },
    reducers:{
        // actions
        getNowPlaingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload
        },
        getPopularMovies:(state, action) => {
            state.popularMovies = action.payload;
        },
        getTopRatedMovies:(state, action) => {
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovies:(state, action) => {
            state.upcomingMovies = action.payload;
        },
        setToggle: (state) => {
            state.toggle = !state.toggle;
        }
    }
});

export const {getNowPlaingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, setToggle} = movieSlice.actions;
export default movieSlice.reducer;