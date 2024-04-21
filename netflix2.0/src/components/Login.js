import React , {useState} from 'react'
import Header from './Header'
import { API_END_POINT } from '../utils/constant.js';
import axios from "axios";
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {setLoading, setUser } from '../redux/userSlice.js';

const Login = () => {
    const [isLogin, setIsLogin] = useState("true");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoading = useSelector(store=>store.app.isLoading);

    const loginHandler = () => {
        setIsLogin(!isLogin);
    }

    const getInputData = async (e) =>{
        e.preventDefault();
        dispatch(setLoading(true));
        if(isLogin){
            const user = {email, password};
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user,
                {
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
                if(res.data.success){
                    toast.success(res.data.message);  
              }
              dispatch(setUser(res.data.user));
              navigate("/browse");
          } catch (error) {
              toast.error(error.response.data.message)
              console.log(error);
            } finally {
                dispatch(setLoading(false));
            }
        }
        else{
            dispatch(setLoading(true));
            const user = {fullName, email, password};
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user,
                {
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
                    
                if(res.data.success){
                      toast.success(res.data.message);  
                }
                console.log(res);
                setIsLogin(true)
            } catch (error) {
                toast.error(error.response.data.message)
                console.log(error);
            } finally {
                dispatch(setLoading(false));
            }
        }
        setFullName("");
        setEmail("");
        setPassword("");
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='h-[100vh] w-[100vw] bg-cover' src="https://i.redd.it/zjgs096khv591.jpg" alt="banner" />
        </div>
        <form onSubmit={getInputData} className='flex flex-col justify-center mx-auto left-0 right-0 bg-black w-3/12 p-12 items-center rounded-md absolute my-36 opacity-90'>
            <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "Singup"}</h1>
            <div className='flex flex-col'>
                {
                    !isLogin &&  <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" placeholder='Full Name' className='outline-none my-2 p-3 rounded-sm bg-gray-800 text-white' />
                }
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='outline-none my-2 p-3 rounded-sm bg-gray-800 text-white' />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='outline-none my-2 p-3 rounded-sm bg-gray-800 text-white' />
                <button className='bg-red-600 text-white mt-4 p-3 rounded-sm font-bold'>{ `${isLoading ? "loading..." : (isLogin ? "Login" : "Signup")}` }</button>
                <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"} <span onClick={loginHandler} className='ml-1 text-blue-900 cursor-pointer font-bold' > {isLogin ? "Signup" : "Login"} </span>  </p>
            </div>
        </form>
    </div>
  )
}

export default Login
