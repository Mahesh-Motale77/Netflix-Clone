import axios from "axios";
import { Now_Playing_Movie } from "../utils/constant";
import { getNowPlaingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Now_Playing_Movie, options);
        dispatch(getNowPlaingMovies(res.data.result));
    } catch (error) {
        console.log(error);
    }
}

export default useNowPlayingMovies;
