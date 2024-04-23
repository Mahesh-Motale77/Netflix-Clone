import axios from "axios";
import { Popular_Movie } from "../utils/constant";
import { getPopularMovies } from "../redux/movieSlice";
import { useDispatch }  from "react-redux";

const usePopularMovies  = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Popular_Movie, options);
        dispatch(getPopularMovies(res.data.result));
    } catch (error) {
        console.log(error);
    }
}

export default usePopularMovies;