import React, { useEffect, useRef, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {hide} from "../redux/Reducers"
import LinksUser from './LinkUser';
import logo from "../../../public/logo.png"
function Aside() {
  const aside = useRef('');
  const dispatch = useDispatch()
  const showAside = useSelector(({show_and_hide_aside:{aside}})=>aside);
  const styles = `animated-bg px-4 fixed h-[100vh] md:left-0 ${showAside?`left-0`:`left-[-100%]`} w-[300px] z-[11] top-0 duration-300 bg-white shadow-lg shadow-gray-400 md:shadow-none md:border-r-[1.5px] border-gray-200 md:w-[70px] `

  useEffect(()=>{
   
   const handleClick= (e)=>{
    if(!aside.current.contains(e.target)){
      dispatch(hide())
        
    }
    }
    document.addEventListener('mousedown',handleClick);

  },[])
  return (
    <aside ref={aside} className={styles}>
     {/* logo */}
     <div className='flex items-center gap-2 py-5 cursor-pointer' >
      <img className='w-[50px]' src={logo} alt="" />
      <h1 className='text-xl font-bold text-primaryColor md:hidden'>CNTIC DASHBOARD</h1>
     </div>
    {/* links  */}
    <div>
      <LinksUser/>
    </div>
    {/* footer  */}
    <div className='text-gray-500 text-sm font-normal absolute -bottom-[-12px] left-[60%] w-full -translate-x-[50%]'>
      <span className='md:hidden'>© 2023 <strong className=' text-primaryColor'>CNTIC</strong>,Inc. All rights reserved</span>
      <span className='hidden md:flex'>© 2023</span>
      </div>
  </aside>
  )
}

export default Aside
