import axios from "axios";
import { Upcoming_Movie } from "../utils/constant";
import { getUpcomingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";


const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Upcoming_Movie, options);
        dispatch(getUpcomingMovies(res.data.result));
    } catch (error) {
        console.log(error);
    }
}

export default useUpcomingMovies;
