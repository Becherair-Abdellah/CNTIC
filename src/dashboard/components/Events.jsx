import React from 'react'
import Card from './Card'
import { BiCalendarEvent } from 'react-icons/bi'
function Events() {
  return (
    <div className='mt-5 w-full relative'>
     {/* intro  */}
     <div className='flex flex-col md:flex-row md:justify-between items-center w-full gap-5'>
<Card icon={<BiCalendarEvent size={50}/>}  color='bg-gradient-to-r from-blue-500 to-pink-500' title='Events' nbr="25"/>        
</div>
     {/* add event  */}
     <div className='w-full mt-6 rounded-md relative'>
     <span className='w-[75%] h-[3px] absolute top-0 right-0 bg-primaryColor'></span>
     <span className='w-[4px] h-[100px] absolute top-0 right-0 bg-primaryColor'></span>
     <span className='w-[40px] h-[4px] absolute bottom-0 left-0 bg-primaryColor'></span>
        <span className='w-[4px] h-[30px] absolute bottom-0 left-0 bg-primaryColor'></span>
        <h2 className='bg font-semibold absolute left-2 -top-[.7rem] bg-primaryColor text-white px-1 py-1'>Add Event</h2>
        <div className='bg-gray-100 mt-3 py-7 px-3'>
            <form action="" className=''>
                <div className='flex flex-col gap-2'>
                <label htmlFor="text" className='text-gray-600 font-semibold'>Text</label>
                <textarea rows={7} className='p-3 text-gray-600 outline-none rounded-md resize-none' type="text" placeholder='write here ... !' />
                </div>

                <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="text" className='text-gray-600 font-semibold'>Comment</label>
                <textarea rows={3} className='p-3 text-gray-600 outline-none rounded-md resize-none' type="text" placeholder='write comment here ... !' />
                </div>
               <div className='mt-4'>
                <label htmlFor="" className='text-gray-600'>Pictures</label>
                <input type="file" />
               </div>
            </form>
        </div>
     </div>
    </div>
  )
}

export default Events
