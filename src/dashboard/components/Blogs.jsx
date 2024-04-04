import React, { useRef, useState } from 'react';
import Card from './Card';
import { RiArticleLine, RiPencilLine } from 'react-icons/ri';
import { BiSolidCloudUpload, BiPaperPlane } from 'react-icons/bi';
import axios from 'axios';
import { useGetToken } from '../../hooks/useGetToken';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Blogs() {
  const { headers } = useGetToken();
  const [img, setImg] = useState('');
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const Ref = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(!file) {
      console.log('No file selected');
      return;
    };
    setImg(e.target.files[0]);
  };

  const handelSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('Title', Title);
      formData.append('image', img);
      formData.append('Description', Description);

      const url = 'https://backend.cntic-club.com/api/posts/blogs/create/';
      const response = await axios.post(url, formData, {
        headers: {
          ...headers,
        },
      }).then((res) => res.data).then((data) => console.log(data));

      toast.success("Blog Created Successfully.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    });
    } catch (error) {
      console.error(error);
      toast.error("Failed To Create Blog", {
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
        <Card icon={<RiArticleLine size={50} />} color='bg-gradient-to-r from-red-500 to-[#0058ff]' title='Blogs' nbr="12" />
      </div>
      {/* add Article  */}
      <div className='w-full mt-12 rounded-md relative'>
        <span className='w-[75%] h-[3px] absolute top-0 right-0 bg-primaryColor'></span>
        <span className='w-[4px] h-[100px] absolute top-0 right-0 bg-primaryColor'></span>
        <span className='w-[40px] h-[4px] absolute bottom-0 left-0 bg-primaryColor'></span>
        <span className='w-[4px] h-[30px] absolute bottom-0 left-0 bg-primaryColor'></span>
        <h2 className='bg font-semibold absolute left-2 -top-[1rem] bg-primaryColor text-white px-1 py-1'>Add Blog</h2>
        <div className='bg-gray-100 mt-3 py-7 px-3'>
          <form onSubmit={
            (e) => {
              e.preventDefault();
              handelSubmit();
            }
          }>
            <div className='flex flex-col gap-2 mt-5'>
              <label htmlFor="text" className='text-gray-600 font-semibold flex items-center gap-2'><RiPencilLine />Title</label>
              <input required type='text' className='p-3 text-gray-600 outline-none rounded-md resize-none' placeholder='Title....' onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2 mt-5'>
              <label htmlFor="text" className='text-gray-600 font-semibold flex items-center gap-2'><RiPencilLine />Description</label>
              <textarea required type='text' className='p-3 text-gray-600 outline-none rounded-md resize-none' placeholder='Description....' onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='mt-4 flex flex-col'>
              <label htmlFor="" className='text-gray-700 font-semibold'>Pictures</label>
              <input required ref={Ref} type="file" className='hidden' onChange={handleFileChange} />
              <div className='text-primaryColor cursor-pointer' onClick={() => Ref.current.click()}><BiSolidCloudUpload size={30} /></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 border-gray-300 border-b-[2px] my-3'>
              {/* Display image preview here */}
              {img && <img src={URL.createObjectURL(img)} alt="Preview" className="col-span-1 md:col-span-3" />}
            </div>
            <button type='submit' className='text-white font-bold bg-primaryColor text-center rounded-sm p-2 gap-2 relative left-[100%] -translate-x-[100%]'>
              <BiPaperPlane size={23} />
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Blogs;
