import React, { useEffect, useRef, useState } from 'react' 
import BanUser from "./BanUser"
import { useGetToken } from '../../hooks/useGetToken';
function User({name,nbrcard,ID,userId,is_banned}) {
  const Ref = useRef();
  const [poPub,setPopub] = useState(false);
  const [rmUser,setrm] = useState(false);
  const {headers} = useGetToken();
  useEffect(()=>{
    rmUser?Ref.current.remove():'';
  });
  const handelBan = async () => {
    try {
      const url = `https://backend.cntic-club.com/api/posts/Change_user_status/${userId}/`
      const response = await fetch(
        url,
        {
          method: "POST",
          headers: {
            ...headers,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to Ban');
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    }
    const handelClick = () => {
      setPopub(true)
    }
  return (
    <>
            {poPub && <BanUser setPopub={setPopub} setrm={setrm} handelTrue={handelBan} name={name} is_banned={is_banned}/>}
            <li ref={Ref} className='grid grid-cols-4 bg-gray-100 p-1 text-gray-600 rounded-md mb-2 relative text-[14px] hover:bg-gray-200  '>
                <span>{name}</span>
                <span>{nbrcard}</span>
                <span>{ID}</span>
                <span className='text-white bg-red-500 rounded-md cursor-pointer flex justify-center items-center font-bold h-full w-[40px]' onClick={handelClick}>
                        x
                </span>
            </li>
    </>
  )
}

export default User
