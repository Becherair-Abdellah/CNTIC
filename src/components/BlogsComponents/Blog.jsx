import React from 'react'
import './Blog.css'
function Blog({Title, Description,Image}) {
  return (
    <div className='w-full md:w-[30%] shadow-lg bg-neutral-200 blog relative'>
      <img src={'https://backend.cntic-club.com/'+Image} alt="" className='w-full' loading='lazy' />
      <div>
        <h3 className='w-full text-center mt-5 md:w-[93%] md:text-left md:mx-5 text-blue-800 text-3xl font-bold leading-10'>{Title}</h3>
        <p className='text-neutral-600 mt-5 text-[26px] font-medium leading-[41px] mx-5'>{Description}</p>
        <p className='read relative w-[40%] bg-blue-800 text-white text-[26px] text-right h-10 ml-auto px-1'>
        </p>
      </div>
    </div>
  )
}

export default Blog