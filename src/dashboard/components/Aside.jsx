import React, { useEffect, useRef, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {hide} from "../redux/Reducers"
function Aside() {
  const aside = useRef('');
  const dispatch = useDispatch()
  const showAside = useSelector(({show_and_hide_aside:{aside}})=>aside);
  const styles = `animated-bg fixed h-[100vh] md:left-0 ${showAside?`left-0`:`left-[-100%]`} w-[300px] z-[11] top-0 duration-300 bg-white shadow-lg shadow-gray-400`

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
    aside bar
    <h1>abdellah</h1>
  </aside>
  )
}

export default Aside
