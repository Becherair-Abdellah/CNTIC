import React, { useEffect, useState } from 'react'
import {FaBars } from "react-icons/fa"
import { Routes,Route, Outlet } from 'react-router'
import {FiSearch,FiMoon} from "react-icons/fi"
import {LuLanguages} from "react-icons/lu"
import Aside from './Aside'
import img2 from "../../assets/i1.jpg"
import img from "../../assets/i2.jpg"
import Search from './Search'
import Main from './Main'
import { FaSleigh } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import Signout from './Signout'
// import actions 
import {show} from "../redux/Reducers"
import { show_signout } from '../redux/Reducers'
import { BrowserRouter } from 'react-router-dom'
function Dashboard() {
  const styles = `main_page relative py-[24px]  animated-bg_test text-white  h-[2000px]`;
  const dispatch = useDispatch();
  const showAside = useSelector(({show_and_hide_aside:{aside}})=>aside);
  return (
    <div className=''>
      <Signout/>
      <header className=' select-none fixed w-full z-[1] flex justify-between items-center p-2 md:w-cuWidth md:left-[70px]'>
        {/* search  */}
        {/* <Search/> */}
        <div className='flex items-center gap-3'>
       <div className='hover:bg-gray-100 p-3 rounded-full  cursor-pointer text-gray-500' onClick={()=> dispatch(show())}>
       <FaBars  size={20} />
       </div>
       <div className='flex'>
       <div className='hover:bg-gray-100  p-3 rounded-full cursor-pointer text-gray-500 z-[11] md:hover:bg-transparent'>
        <FiSearch size={20} className=' ' onClick={()=>{console.log(true)}}/>
        </div>
        <form  className='flex-1 w-full   ml-5 md:ml-0 relative  items-center gap-5'>
                <input className='p-2 text-gray-500 bg-gray-100 rounded-md outline-none pr-8 md:w-[500px] w-full -left-3 md:pl-[2.5rem] md:px-5 relative md:-left-10 top-[.2rem]' type="text" placeholder='any things ?' />
               
            </form>
       </div>
        </div>



    
          
          <div className='flex items-center justify-between gap-3'>
          <div className=' hover:bg-gray-100 p-3 rounded-full cursor-pointer'>
          <LuLanguages   size={20} className='cursor-pointer text-gray-500'/>
          </div>


          <div className='hover:bg-gray-100 p-2  rounded-full cursor-pointer' onClick={()=>{
            dispatch(show_signout());
            console.log('ren time for');}
        }>
          <div className='w-[30px] h-[30px] '>
            <img src={img} className='h-full w-full object-cover rounded-full cursor-pointer' alt="" />
          </div>
          </div>


          </div>
          
       
      </header>

      <div className={styles}>
      </div>
      <Aside/>
    </div>
  )
}

export default Dashboard
