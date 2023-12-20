import React, { useRef } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import logo from "../../../public/logo.png"
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hide_signout } from '../redux/Reducers';
function Signout() {
    const signout = useRef();
    const dispatch = useDispatch();
    const showAside = useSelector(({show_and_hide_aside:{signout}})=>signout);
    const style = `absolute right-[3%] top-[7%] bg-gray-100 p-3 rounded-lg border-blue-500 border-[1.5px] z-[11] ${showAside?"":"hidden"}`;

    useEffect(()=>{
   
        const handleClick= (e)=>{
         if(!signout.current.contains(e.target)){
           dispatch(hide_signout());
             
         }
         }
         document.addEventListener('mousedown',handleClick);
     
       },[]);
  return (
    
    <div className={style} ref={signout}>
        
     <div className='flex items-center  gap-2 cursor-pointer ' >
      <img className='w-[50px]' src={logo} alt="" />
      <h1 className="text- font-semibold text-gray-700">cntic.club@gmail.com</h1>
     
     </div>
      <li className='flex items-center gap-3 p-3 px-2 text-[15px] w-full hover:bg-gray-200 cursor-pointer  mb-3 rounded-md text-gray-600 mt-4' ><FaSignOutAlt size={21}/>Sign Out</li>
    </div>
  )
}

export default Signout
