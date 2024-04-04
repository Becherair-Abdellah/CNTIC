import React, { useRef } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import logo from "../../../public/logo.png"
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hide_signout, logout } from '../redux/Reducers';
import { useGetUser } from '../../hooks/useGetUser';
import { useCookies } from "react-cookie";
function Signout() {
  const {Profile} = useGetUser()
  const [cookies, setCookies] = useCookies(["access_token"])
    const signout = useRef();
    const dispatch = useDispatch();
    const showAside = useSelector(({show_and_hide_aside:{signout}})=>signout);
    const style = `absolute right-[3%] top-[7%] bg-gray-100 p-3 rounded-lg border-blue-500 border-[1.5px] z-[11] ${showAside?"":"hidden"}`;
      const Logout = () => {
        setCookies('access_token', null)
        dispatch(logout());
      };

    useEffect(()=>{
        const handleClick= (e)=>{
         if(!signout.current.contains(e.target)){
           dispatch(hide_signout());
             
         }
         }
         document.addEventListener('mousedown',handleClick);
     
       },[]);
       const handelLogout = () => {
        Logout()
        dispatch(hide_signout())
       }
  return (
    
    <div className={style} ref={signout}>
        
     <div className='flex items-center  gap-2 cursor-pointer ' >
      <img className='w-[50px]' src={logo} alt="" />
      <h1 className="text- font-semibold text-gray-700">{Profile.email}</h1>
     
     </div>
      <li className='flex items-center gap-3 p-3 px-2 text-[15px] w-full hover:bg-gray-200 cursor-pointer  mb-3 rounded-md text-gray-600 mt-4' onClick={handelLogout}><FaSignOutAlt size={21}/>Sign Out</li>
    </div>
  )
}

export default Signout
