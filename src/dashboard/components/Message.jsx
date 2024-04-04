import React from 'react'
import { BiReplyAll } from 'react-icons/bi'
import BanUser from './BanUser'
import { useRef,useState,useEffect } from 'react';
function Message({user,message,readed}) {
    const Ref = useRef();
    const [poPub,setPopub] = useState(false);
    const [rmUser,setrm] = useState(false);
    const [cencelReaded,setCancel] = useState(!readed);
    useEffect(()=>{
      rmUser?Ref.current.remove():'';
    });
  return (
   
    <>
    {poPub&& <BanUser setPopub={setPopub} setrm={setrm}/>}
    <li ref={Ref} className="text-gray-700 gap-4 bg-gray-100 hover:bg-gray-200 rounded-lg p-[6px] relative flex justify-between items-center cursor-pointer mt-3" onClick={()=>{

      setCancel(false);
    }} >
      {/* readed state */}
              {!readed && cencelReaded && <span className='absolute left-0 top-0 bg-[#0040ff29] rounded-lg w-full h-full'>
                <span className='absolute left-[5px] top-[2px] bg-primaryColor w-[8px] h-[8px] rounded-full'></span>
                </span>  }
              <div>
                <h3 className="text-[12px] font-bold ">{user}</h3>
              </div>
              <span className="text-[12px] font-semibold overflow-hidden overflow-y-visible w-[400px] h-[20px] md:w-full md:h-[20px] text-center flex-1 ">{message}</span>
              <div className="flex items-center justify-between gap-2 z-[111]">
                <button className="bg-red-500 text-white font-bold w-[25px] h-[25px] rounded-lg flex justify-center items-center pb-1 cursor-pointer" onClick={()=>{
                      // document.querySelector('.overlay').classList.add('hidden');
                      setPopub(true);
                    }}>x</button>
                <button className="bg-green-500 text-white font-bold w-[25px] h-[25px] rounded-lg flex justify-center items-center pb-1 cursor-pointer"><BiReplyAll size={30} className="relative top-[2px] right-[1px]"/></button>
              </div>
            </li>
            </>
  )
}

export default Message
