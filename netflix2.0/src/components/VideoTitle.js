import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";


const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[vw] aspect-video absolute z-10 mt-[15%] p-12  text-white'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/3 mt-4'>{overview}</p>
      <div className='mt-8 flex'>
        <button className='px-6 py-2 flex items-center bg-white text-black rounded-md hover:bg-opacity-80 mr-2'>
            <CiPlay1 size='24px'/>
            <span className='ml-1'> Play </span> 
        </button>
        <button className='px-6 py-2 flex items-center bg-white bg-opacity-40 text-black rounded-md hover:bg-opacity-80'>
            <CiCircleInfo size='24px'/>
            <span className='ml-1'> Watch More </span> 
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
