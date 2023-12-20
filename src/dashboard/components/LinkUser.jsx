import React, { useState } from 'react'
import {FiUsers,FiSettings,FiLogOut} from 'react-icons/fi'
import {BsBox,BsTelephone,BsCalendar2Event  } from 'react-icons/bs'
import {BiMessageSquareDots } from "react-icons/bi";
import {RiArticleLine } from "react-icons/ri";
import {LuLayoutDashboard } from "react-icons/lu"
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
function LinksUser() {
  const showAside = useSelector(({show_and_hide_aside:{aside}})=>aside);
  const spanStyle = `${!showAside?"md:hidden":""}`
  return (
    <motion.ul 
      transition={{
        duration: 0.1,
      }} className=' duration-300   bg-white sh w-full rounded-md  mt-4 '>
      <NavLink to="/dashboard">
      <li className='flex items-center gap-3 p-3 px-2 text-[17px] hover:bg-gray-100  cursor-pointer rounded-md text-gray-600' ><LuLayoutDashboard size={21}/> <span className={spanStyle}>Dashboard</span></li>
      </NavLink>
      <NavLink to="/dashboard"><li className='flex items-center gap-3 p-3 px-2 text-[15px] hover:bg-gray-100  cursor-pointer  mb-3 rounded-md text-gray-600' ><FiUsers size={21}/> <span className={spanStyle}>Users</span></li></NavLink>
      <NavLink to="/dashboards"><li className='flex items-center gap-3 p-3 px-2 text-[15px] hover:bg-gray-100 cursor-pointer  mb-3 rounded-md text-gray-600' ><BsCalendar2Event   size={21}/><span className={spanStyle}>Events</span></li></NavLink>
      <NavLink to="/dashboarda"><li className='flex items-center gap-3 p-3 px-2 text-[15px] hover:bg-gray-100  cursor-pointer  mb-3 rounded-md text-gray-600' ><RiArticleLine   size={21} /><span className={spanStyle}>Articles</span></li></NavLink>
      <NavLink to="/dashboardq"><li className='flex items-center gap-3 p-3 px-2 text-[15px] hover:bg-gray-100  cursor-pointer  mb-3 rounded-md text-gray-600' ><BiMessageSquareDots size={21}/><span className={spanStyle}>Messages</span></li></NavLink>
    </motion.ul>
  )
}

export default LinksUser
