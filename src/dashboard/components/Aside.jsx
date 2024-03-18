import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { hide } from "../redux/Reducers"
import LinksUser from './LinkUser';
import logo from "../../../public/logo.png"
function Aside() {
  const aside = useRef('');
  const dispatch = useDispatch()
  const showAside = useSelector(({ show_and_hide_aside: { aside } }) => aside);
  const styles = `animated-bg px-4 fixed h-[100vh] md:left-0 ${showAside ? `left-0 md:w-[300px] ` : `left-[-100%] md:w-[70px]`} w-[300px] z-[111] top-0 duration-200 bg-white shadow-lg shadow-gray-400 md:shadow-none md:border-r-[1.5px] border-gray-200  flex flex-col justify-between`;
  const h1Style = `text-xl duration-500   font-bold text-primaryColor ${showAside ? "" : "md:hidden"}`;

  useEffect(() => {

    const handleClick = (e) => {
      if (!aside.current.contains(e.target)) {
        dispatch(hide())
      }
    }
    document.addEventListener('mousedown', handleClick);

  }, []);
  return (
    <aside ref={aside} className={styles}>
      <div>
        {/* logo */}
        <div className='flex items-center  gap-2 py-5 cursor-pointer' >
          <img className='w-[50px]' src={logo} alt="" />
          <h1 className={h1Style}>CNTIC</h1>
        </div>
        {/* links  */}
        <div>
          <LinksUser />
        </div>
      </div>
      {/* footer  */}
      <div className='text-gray-500 text-sm font-normal w-full text-center'>
        <span className={showAside ? ' text-center relative bottom-4' : 'hidden'}>© 2023 <strong className=' text-primaryColor'>CNTIC</strong>,Inc. All rights reserved</span>
        <span className={showAside ? ' text-center hidden' : 'md:block hidden'}>© 2023</span>
      </div>
    </aside>
  )
}

export default Aside
