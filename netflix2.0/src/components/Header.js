import React from 'react'
import NetflixLogo from '../images/netflix-logo.png'
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector , useDispatch} from 'react-redux';
import { API_END_POINT } from '../utils/constant';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { setUser } from '../redux/userSlice';



const Header = () => {
  const user = useSelector((store)=>store.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async ()=>{
    try {
      const res = await axios.get( `${API_END_POINT}/logout`);
      if(res.data.success){
          toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute z-10 flex w-[100%] justify-between items-center px-6 bg-gradient-to-b from-black">
      <img  className='w-56' src={NetflixLogo} alt="Netflix-Logo" />
      {
        user && <div className='flex items-center'>
        <IoIosArrowDropdown size="24px" color='white'/>
        <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
        <div className='ml-4'>
            <button onClick={logoutHandler} className='bg-red-800 px-4 py-2 text-white'>Logout</button>
            <button className='bg-red-800 px-4 py-2 ml-2 text-white'>Search Movies</button>
        </div>
      </div>
      }
    </div>
  )
}

export default Header
