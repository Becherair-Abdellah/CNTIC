import React, { useState } from 'react'
import {FiUsers,FiSettings,FiLogOut} from 'react-icons/fi'
import {BsBox,BsTelephone,BsCalendar2Event  } from 'react-icons/bs'
import {BiMessageSquareDots } from "react-icons/bi";
import {RiArticleLine } from "react-icons/ri";
import {LuLayoutDashboard } from "react-icons/lu"
import { motion } from 'framer-motion'
function LinksUser() {
  return (
    <motion.ul 
      transition={{
        duration: 0.1,
      }} className=' duration-300   bg-white sh w-full rounded-md  mt-4 '>
      <li className='flex items-center gap-3 p-3 px-2 text-[17px] hover:bg-gray-100  cursor-pointer bg-gradient-to-r from-blue-500 to-blue-400 mb-3 rounded-md text-white font-semibold' ><LuLayoutDashboard size={21}/> <span className='md:hidden'>Dashboard</span></li>
      <li className='flex items-center gap-3 p-3 px-2 text-[15px] hover:bg-gray-100  cursor-pointer  mb-3 rounded-md text-gray-600' ><FiUsers size={21}/> <span className='md:hidden'>Users</span></li>
      <li className='flex items-center gap-3 p-3 px-2 text-[15px] hover:bg-gray-100 cursor-pointer  mb-3 rounded-md text-gray-600' ><BsCalendar2Event   size={21}/><span className='md:hidden'>Events</span></li>
      <li className='flex items-center gap-3 p-3 px-2 text-[15px] hover:bg-gray-100  cursor-pointer  mb-3 rounded-md text-gray-600' ><RiArticleLine   size={21} /><span className='md:hidden'>Articles</span></li>
      <li className='flex items-center gap-3 p-3 px-2 text-[15px] hover:bg-gray-100  cursor-pointer  mb-3 rounded-md text-gray-600' ><BiMessageSquareDots size={21}/><span className='md:hidden'>Messages</span></li>
    </motion.ul>
  )
}

export default LinksUser
