import React from 'react'
import './Blog.css'
import Photo from '../../assets/photo_2023-10-16_21-25-08 1.svg'
function Blog() {
  return (
    <div className='w-full md:w-[30%] shadow-lg bg-neutral-200 blog relative'>
      <img src={Photo} alt="" className='w-full' loading='lazy' />
      <div>
        <h3 className='w-full text-center mt-5 md:w-[93%] md:text-left md:mx-5 text-blue-800 text-3xl font-bold leading-10'>OverView : Cntic Club2023 Open Day Was Awesom</h3>
        <p className='text-neutral-600 mt-5 text-[26px] font-medium leading-[41px] mx-5'>Embark on a digital journey with coding wizardry and unravel the secrets of web development. ✨🚀</p>
        <p className='read relative w-[40%] bg-blue-800 text-white text-[26px] text-right h-10 ml-auto px-1'>
          <a href="" className=''>Read More</a>
        </p>
      </div>
    </div>
  )
}

export default Blog