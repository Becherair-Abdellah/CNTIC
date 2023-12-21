import React, { useEffect } from 'react'
import { FaAt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
function MessageDetails({setCencle,setShow}) {
    useEffect(()=>{
        // setCencle(false);
        // setShow(false)
    },[]);
  return (
    <div className='w-[90%] md:w-[50%] h-[300px] left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] z-[111111] bg-gray-100 font-semibold fixed rounded-md shadow-lg p-6' onClick={()=>{
      
    }}>
                  <div className="w-[70px] h-[70px] rounded-bl-full bg-primaryColor right-0 top-0 absolute rounded-tr-[40rem] "></div>
          <div className="w-[80px] h-[80px] rounded-tr-full bg-primaryColor left-0 bottom-0 absolute rounded-bl-[40rem]"></div>
      <div className='z-[11] relative '>
        <p className=' flex items-center justify-center gap-2 text-gray-500 font-semibold '><FaAt className='text-primaryColor font-bold' size={17}/> <span className='bg-gray-200 p-2 rounded-lg text-sm'>Abdellah.Bech@gmail.com</span></p>
      </div>
      <div className='h-[135px] text-sm text-gray-500 bg-gray-200 p-3 rounded-md mt-5 overflow-hidden overflow-y-visible'>Hi How Are Brother Iam Here in Cntic Club How to Perform To Navigate in Search Perform 
        Hi How Are Brother Iam Here in Cntic Club How to Perform To Navigate in Search Perform 
        Hi How Are Brother Iam Here in Cntic Club How to Perform To Navigate in Search Perform 
        Hi How Are Brother Iam Here in Cntic Club How to Perform To Navigate in Search Perform 
        Hi How Are Brother Iam Here in Cntic Club How to Perform To Navigate in Search Perform
        Hi How Are Brother Iam Here in Cntic Club How to Perform To Navigate in Search Perform
        Hi How Are Brother Iam Here in Cntic Club How to Perform To Navigate in Search Perform
        </div>

      
      <div className='flex justify-between items-center text-gray-500 relative -bottom-[30px] -left-[17px]'>

        <div className='z-[11] text-white'>
            <span className='text-[12px]'># 5432</span>
            <span className='flex items-center text-[12px] gap-2'><FaUser/> Member </span>
        </div>

        <div className='relative -right-[30px]'>
            <span className='flex items-center text-[12px] gap-2'><FaClock/>  23:45:07</span>
            <span className='flex items-center text-[12px] gap-2'><FaCalendarAlt/> 20 Dec 2023 </span>
        </div>

      </div>
  
      <button className='w-[25px] h-[25px] flex pb-1 justify-center items-center text-primaryColor font-bold bg-white rounded-lg absolute right-2 top-2' onClick={()=>{
       console.log('set show here');
      //  setShow(false);
        // document.querySelector('.overlay').style = `display:none; !important`;
    }} >x</button>
    </div>
  )
}

export default MessageDetails
