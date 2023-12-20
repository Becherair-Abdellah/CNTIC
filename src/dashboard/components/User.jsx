import React from 'react'

function User({name,nbrcard,ID,state,section}) {
  return (
    <>
       {/* user  */}
       <li className=' grid grid-cols-manyCustom bg-gray-100 p-1 text-gray-600 rounded-md mb-2 relative text-[14px] hover:bg-gray-200  '>
                <span>{name}</span>
                <span>{nbrcard}</span>
                <span>{ID}</span>
                <span>{state}</span>
                <span>{section}</span>
                <span
                    className='text-white bg-red-500 rounded-md cursor-pointer flex justify-center items-center font-bold
                    absolute right-0 top-0 h-full w-[40px]'>
                        x
                   
                </span>
            </li>
    </>
  )
}

export default User
