import React from 'react'

const SearchMovie = () => {
  return (
    <div className='flex justify-center pt-[10%] w-[100%]'>
      <form className='w-[50%]'>
        <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
            <input type="text" className='w-full outline-none rounded-md text-lg' placeholder="Search Movies..." />
            <button className='bg-red-800 text-white rounded-md px-2'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchMovie
