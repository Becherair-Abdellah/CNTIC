import React from 'react'
import { FaUser } from 'react-icons/fa'
import { BsExclamationCircle } from 'react-icons/bs'
import { FaRemoveFormat } from 'react-icons/fa'
import { BiCheck } from 'react-icons/bi'
import { useGetUser } from '../../hooks/useGetUser'
function BanUser({setPopub,setrm,handelTrue,name,is_banned}) {
  return (
    <div className='popub z-[111] bg-gray-50 shadow-lg fixed -translate-x-1/2 top-1/2 left-1/2 p-4 rounded-md'>
      <div className='flex flex-col items-center'>
        <BsExclamationCircle className='text-red-500' size={50} />
        {is_banned?<h1 className='text-red-500 text-lg font-semibold'>UnBan {name}</h1>:<h1 className='text-red-500 text-lg font-semibold'>Ban {name}</h1>}
        </div>
    <div className='flex justify-center gap-4 items-center mt-4'>
    <button
                    className='text-white bg-red-500 rounded-md cursor-pointer flex justify-center items-center font-bold
                     h-[30px] w-[40px]' onClick={()=>{
                      setPopub(false);
                      
                     }}>
                        x
                </button>
                <button
                    className='text-white bg-green-500 rounded-md cursor-pointer flex justify-center items-center font-bold
                     h-[30px] w-[40px]' onClick={()=>{
                       handelTrue();
                      setPopub(false);
                      
                     }}>
                        
                   <BiCheck size={30}/>
                </button>
    </div>
    </div>
  )
}

export default BanUser
