import React, { useRef, useState } from 'react'
import Card from './Card'
import { BiCalendarEvent } from 'react-icons/bi'
import { BiComment } from 'react-icons/bi';
import { BiSolidCloudUpload, BiPaperPlane, } from 'react-icons/bi';
import { RiArticleLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetToken } from '../../hooks/useGetToken';
function Events() {
  const { headers } = useGetToken();  
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [count,setCount] = useState(0);
  const [image,setImage] = useState([]);
  const Ref = useRef();
  const refImg = useRef();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(!file) {
      console.log('No file selected');
      return;
    };
    setImage(e.target.files[0]);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('Title', title);
      formData.append('Description', description);
      formData.append('count', count);
      formData.append('image', image);
      const url = 'https://backend.cntic-club.com/api/posts/Create_Event/';
      const response = await fetch(url, {
        method: "POST",
        headers: {
          ...headers,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to Create Event');
      }
      toast.success("Event Created Successfully.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    });
    } catch (error) {
      console.log(error);
      toast.error("Failed To Create Event", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    });
    }
  };
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
            <form action="" className='' onSubmit={handelSubmit}>
                <div className='flex flex-col gap-2'>
                <label htmlFor="text" className='text-gray-600 font-semibold flex items-center gap-2'><RiArticleLine/> Title</label>
                <input
                type="text"
                required
                onChange={(e) => setTitle(e.target.value)}
                className='p-3 text-gray-600 outline-none rounded-md' placeholder='Event Title... ' />
                </div>

                <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="text" className='text-gray-600 font-semibold flex items-center gap-2'><BiComment size={20} />Description</label>
                <textarea 
                required
                onChange={(e) => setDescription(e.target.value)}
                rows={3} className='p-3 text-gray-600 outline-none rounded-md resize-none' type="text" placeholder='Event Description...' />
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="text" className='text-gray-600 font-semibold flex items-center gap-2'><BiComment size={20} />Counter</label>
                <input 
                required
                onChange={(e) => setCount(e.target.value)}
                className='p-3 text-gray-600 outline-none rounded-md resize-none' type="text" placeholder='Number of attendees...' />
                </div>
                <div className='mt-4 flex flex-col'>
                  <label htmlFor="" className='text-gray-700 font-semibold'>Pictures</label>
                  <input ref={Ref} type="file" className='hidden' onChange={handleFileChange} />
                  <div className='text-primaryColor cursor-pointer' onClick={() => Ref.current.click()}><BiSolidCloudUpload size={30} /></div>
              </div>
               <div ref={refImg} className='grid grid-cols-1 md:grid-cols-3  gap-3 border-gray-300 border-b-[2px] my-3 ' >
               </div>
               <button type='submit' className='text-white font-bold bg-primaryColor text-center rounded-sm p-2 gap-2 relative left-[100%] -translate-x-[100%]'>
               <BiPaperPlane size={23}/>
               </button>
            </form>
        </div>
     </div>
      <ToastContainer />
    </div>
  )
}

export default Events
