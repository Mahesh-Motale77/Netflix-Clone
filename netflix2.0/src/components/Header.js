import React from 'react'
import NetflixLogo from '../images/netflix-logo.png'
import { IoIosArrowDropdown } from "react-icons/io";


const Header = () => {
  return (
    <div className="absolute z-10 flex w-[100%] justify-between items-center px-6 bg-gradient-to-b from-black">
      <img  className='w-56' src={NetflixLogo} alt="Netflix-Logo" />
      <div className='flex items-center'>
        <IoIosArrowDropdown size="24px" color='white'/>
        <h1 className='text-lg font-medium text-white'>Mahesh Motale</h1>
        <div className='ml-4'>
            <button className='bg-red-800 px-4 py-2 text-white'>Logout</button>
            <button className='bg-red-800 px-4 py-2 ml-2 text-white'>Search Movies</button>
        </div>
      </div>
    </div>
  )
}

export default Header
