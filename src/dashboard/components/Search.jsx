import React from 'react'
import {RiCloseFill} from "react-icons/ri"
import {FiSearch} from "react-icons/fi"
import { motion } from 'framer-motion'
function Search() {
    const isClick = true;
  return (
    <>
            <form  className='flex-1 md:flex-none ml-5 md:ml-0 relative  items-center gap-5 hidden mfx w-[600px]'>
                <input className='  p-2 bg-gray-100 rounded-md outline-none pr-8 w-full md:p-3 md:px-5' type="text" placeholder='Search FastKart' />
                <RiCloseFill onClick={()=>console.log(false)} size={23} className='md:hidden text-gray-500 absolute top-[8px] right-[10px] cursor-pointer ' />
                <button className='hidden md:block bg-orange-500 p-3 px-5 rounded-lg'>
                    <FiSearch size={22}  className='cursor-pointer text-white' />
                </button>
            </form>
        </>
  )
}

export default Search
