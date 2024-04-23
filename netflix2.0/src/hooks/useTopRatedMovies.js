import axios from "axios";
import { Top_Rated_Movie } from "../utils/constant";
import { getTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovies(res.data.result));
    } catch (error) {
        console.log(error);
    }
}

export default useTopRatedMovies;
