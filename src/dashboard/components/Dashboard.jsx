import React, { useEffect, useState } from 'react'
import {AiOutlineAlignLeft} from "react-icons/ai"
import {FiSearch,FiMoon} from "react-icons/fi"
import {LuLanguages} from "react-icons/lu"
import Aside from './Aside'
import img2 from "../../assets/i1.jpg"
import img from "../../assets/i2.jpg"
import Search from './Search'
import Main from './Main'
import { FaSleigh } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
// import actions 
import {show} from "../redux/Reducers"
function Dashboard() {
  const styles = `main_page relative py-[24px]  animated-bg_test text-white  h-[2000px]`;
  const dispatch = useDispatch();
  const showAside = useSelector(({show_and_hide_aside:{aside}})=>aside);
  return (
    <div className=''>
      <header className=' select-none fixed w-full z-[1] flex justify-between items-center p-4  md:calc md:ml-[300px]'>
        {/* search  */}
        {/* <Search/> */}
        <div className='flex items-center gap-3'>
       <div className='hover:bg-gray-100 p-4 rounded-full cursor-pointer ' onClick={()=> dispatch(show())}>
       <AiOutlineAlignLeft size={20} className='cursor-pointer text-gray-500 md:hidden   '/>
       </div>
        <div className='hover:bg-gray-100 p-4 rounded-full cursor-pointer '>
        <FiSearch size={20} className=' text-gray-500 md:hidden' onClick={()=>{console.log(true)}}/>
        </div>
        </div>



    
          
          <div className='flex items-center justify-between gap-3'>
          <div className=' hover:bg-gray-100 p-4 rounded-full cursor-pointer'>
          <LuLanguages   size={20} className='cursor-pointer text-gray-500'/>
          </div>
          <div className='hover:bg-gray-100 p-2  rounded-full cursor-pointer'>
          <div className='w-[40px] h-[40px] '>
            <img src={img} className='h-full w-full object-cover rounded-full cursor-pointer' alt="" />
          </div>
          </div>
          </div>
          
       
      </header>
      <div className={styles}>
      {/* <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="*" element={<h1>Not Found It !!</h1>} />
      </Routes> */}
      </div>
      <Aside/>
    </div>
  )
}

export default Dashboard
