import React from 'react'
import { FaUser } from 'react-icons/fa'
import { BsExclamationCircle } from 'react-icons/bs'
import { FaRemoveFormat } from 'react-icons/fa'
import { BiCheck } from 'react-icons/bi'
function RemoveUser({setPopub,setrm}) {
  return (
    <div className='popub z-[111] bg-gray-50 shadow-lg fixed -translate-x-1/2 top-1/2 left-1/2 p-4 rounded-md'>
      <div className='flex flex-col items-center'>
        <BsExclamationCircle className='text-red-500' size={50} />
       <span className='text-gray-700 mt-3 block'> Remove This User</span>
        </div>
    <div className='flex justify-center gap-4 items-center mt-4'>
    <button
                    className='text-white bg-red-500 rounded-md cursor-pointer flex justify-center items-center font-bold
                     h-[30px] w-[40px]' onClick={()=>{
                      setPopub(false);
                      document.querySelector('.overlay').style = `display:none`;
                     }}>
                        x
                   
                </button>
                <button
                    className='text-white bg-green-500 rounded-md cursor-pointer flex justify-center items-center font-bold
                     h-[30px] w-[40px]' onClick={()=>{
                      setrm(true);
                      setPopub(false);
                      document.querySelector('.overlay').style = `display:none`;

                     }}>
                        
                   <BiCheck size={30}/>
                </button>
    </div>
    </div>
  )
}

export default RemoveUser
