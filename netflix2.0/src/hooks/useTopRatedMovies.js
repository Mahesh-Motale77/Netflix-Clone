import axios from "axios";
import { Top_Rated_Movie } from "../utils/constant";
import { getTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";


const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovies(res.data.results));
    } catch (error) {
        console.log(error);
    }
}

export default useTopRatedMovies;
