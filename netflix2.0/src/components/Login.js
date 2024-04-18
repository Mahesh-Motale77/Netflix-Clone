import React , {useState} from 'react'
import Header from './Header'

const Login = () => {
    const [isLogin, setIsLogin] = useState("true");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = () => {
        setIsLogin(!isLogin);
    }

    const getInputData = (e) =>{
        e.preventDefault();
        console.log(fullName, email, password);
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
                <button className='bg-red-600 text-white mt-4 p-3 rounded-sm font-bold'>{isLogin ? "Login" : "Signup"}</button>
                <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"} <span onClick={loginHandler} className='ml-1 text-blue-900 cursor-pointer font-bold' > {isLogin ? "Signup" : "Login"} </span>  </p>
            </div>
        </form>
    </div>
  )
}

export default Login
