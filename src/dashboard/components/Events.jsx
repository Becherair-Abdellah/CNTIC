import React, { useRef, useState } from 'react'
import Card from './Card'
import { BiCalendarEvent } from 'react-icons/bi'
import { BiComment } from 'react-icons/bi';
import { BiSolidCloudUpload, BiPaperPlane, } from 'react-icons/bi';
import { RiArticleLine } from 'react-icons/ri';
import { create_img_on_Event_page } from '../func/createImg';
function Events() {
  const [img,setImg] = useState('');
  const Ref = useRef();
  const refImg = useRef();
  return (
    <div className='mt-5 w-full relative'>
     {/* intro  */}
     <div className='flex flex-col md:flex-row md:justify-between items-center w-full gap-5'>
<Card icon={<BiCalendarEvent size={50}/>}  color='bg-gradient-to-r from-[#0058ff] to-[#3195ff]' title='Events' nbr="25"/>        
</div>
     {/* add event  */}
     <div className='w-full mt-12 rounded-md relative'>
     <span className='w-[75%] h-[3px] absolute top-0 right-0 bg-primaryColor'></span>
     <span className='w-[4px] h-[100px] absolute top-0 right-0 bg-primaryColor'></span>
     <span className='w-[40px] h-[4px] absolute bottom-0 left-0 bg-primaryColor'></span>
        <span className='w-[4px] h-[30px] absolute bottom-0 left-0 bg-primaryColor'></span>
        <h2 className='bg font-semibold absolute left-2 -top-[1rem] bg-primaryColor text-white px-1 py-1'>Add Event</h2>
        <div className='bg-gray-100 mt-3 py-7 px-3'>
            <form action="" className=''>
                <div className='flex flex-col gap-2'>
                <label htmlFor="text" className='text-gray-600 font-semibold flex items-center gap-2'><RiArticleLine/> Text</label>
                <textarea rows={7} className='p-3 text-gray-600 outline-none rounded-md resize-none' type="text" placeholder='write here ... !' />
                </div>

                <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="text" className='text-gray-600 font-semibold flex items-center gap-2'><BiComment size={20} />Comment</label>
                <textarea rows={3} className='p-3 text-gray-600 outline-none rounded-md resize-none' type="text" placeholder='write comment here ... !' />
                </div>
               <div className='mt-4 flex flex-col'>
                <label htmlFor="" className='text-gray-700 font-semibold'>Pictures</label>
                <input ref={Ref} type="file" className='hidden' onChange={(e)=>{
                  console.log(e);
                  // setImg()
                  const reader = new FileReader();
                  reader.readAsDataURL(e.target.files[0]);
                  reader.onload = ()=>{
                    // setImg(reader.result);
                    // imgs.push(reader.result);
                    create_img_on_Event_page(reader.result,refImg.current)
                  }
                }} />
                <div className='text-primaryColor cursor-pointer' onClick={()=>{
                  Ref.current.click();
                }}><BiSolidCloudUpload size={30}/></div>
               </div>
               <div ref={refImg} className='grid grid-cols-1 md:grid-cols-3  gap-3 border-gray-300 border-b-[2px] my-3 ' >
               </div>
               <button className='text-white font-bold bg-primaryColor text-center rounded-sm p-2 gap-2 relative left-[100%] -translate-x-[100%]'>
               <BiPaperPlane size={23}/>
               </button>
            </form>
        </div>
     </div>
    </div>
  )
}

export default Events
