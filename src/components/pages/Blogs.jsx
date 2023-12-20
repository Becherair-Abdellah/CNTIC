import React from 'react'
import searchIcon from '../../assets/searchIcon.svg'
import Blog from '../BlogsComponents/Blog'
import '../BlogsComponents/Blog.css'
import button from '../../assets/Vector.svg'
import { useState } from 'react'
function Blogs() {
  const [selected,setSelected] = useState(1);
  return (
    <div className='p-2 py-10 md:p-5 relative'>
      <div></div>
      <div className='w-[95%] search relative md:w-[30%] mx-auto my-10 flex justify-start items-center gap-3 bg-zinc-100 rounded-md border border-blue-800 p-3'>
        <img src={searchIcon} alt="" className='w-9 h-9'/>
        <input type="search" placeholder='Any Article ... ?' className='w-full bg-zinc-100 outline-none ext-neutral-500 text-xl font-medium'/>
      </div>
      <div className='w-[95%] mx-auto flex flex-wrap justify-center items-center gap-16 mb-16'>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        </div>
        <div className='flex justify-center items-center gap-8'>
            <img src={button} alt="" className='cursor-pointer'/>
            <div className='flex justify-center items-center gap-5'>
              <span onClick={() => {setSelected(1)}} className={`${selected == 1 ? "bg-blue-800 text-white" : "bg-neutral-200 text-blue-500"} w-10 h-10 rounded-md flex justify-center items-center`}>1</span>
              <span onClick={() => {setSelected(2)}} className={`${selected == 2 ? "bg-blue-800 text-white" : "bg-neutral-200 text-blue-500"} w-10 h-10 rounded-md flex justify-center items-center`}>2</span>
              <span onClick={() => {setSelected(3)}} className={`${selected == 3 ? "bg-blue-800 text-white" : "bg-neutral-200 text-blue-500"} w-10 h-10 rounded-md flex justify-center items-center`}>3</span>
              <span onClick={() => {setSelected(4)}} className={`${selected == 4 ? "bg-blue-800 text-white" : "bg-neutral-200 text-blue-500"} w-10 h-10 rounded-md flex justify-center items-center`}>4</span>
            </div>
            <img src={button} alt="" className='rotate-180 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Blogs
