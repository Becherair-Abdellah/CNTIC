import React from "react";
import {useGetToken} from '../../hooks/useGetToken'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { useGetUser } from "../../hooks/useGetUser";
import {useNavigate} from 'react-router'
function Event({id,image,title,desc,count,enrolled_users}) {
    const {headers} = useGetToken()
    const {Profile} = useGetUser()
    const Enrolled = enrolled_users.includes(Profile.user)
    const isAuthenticated = useSelector(({ show_and_hide_aside: { authenticated } }) => authenticated);
    const navigate = useNavigate()
    if(!isAuthenticated) {
      navigate('/login')
    }
    const handelEnroll = async () => {
        try {
            const url = `https://backend.cntic-club.com/api/posts/Enroll_Event/${id}/`
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
                throw new Error('Failed to Enroll');
              }
              console.log(response)
              toast.success("Enrolled Successfully.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }catch(error) {
            console.log(error)
            toast.error("Failed To Enroll", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    }
    console.log(count)
  return <div className="w-[90%] md:w-[25%] bg-neutral-300  text-black rounded-md shadow-2xl border border-gray-200 border-solid transition-all duration-500 hover:scale-105">
    <img src={image} alt="" loading="lazy" className="w-full h-[350px] object-cover"/>
    <div className="flex justify-center items-center gap-5 flex-col p-3">
        <h1 className="font-medium leading-5 text-[23px]">{title}</h1>
        <p className="font-normal text-[20px] text-center leading-normal">{desc}</p>
        {count === 0 ? (
            <p className="font-normal leading-5 text-[20px]">There no place left</p>
        ) : (
            <p className="font-normal leading-5 text-[20px]">{count} Places</p>
        )}
        <button 
        disabled={Enrolled || count == 0}
        type="submit" onClick={handelEnroll} className={Enrolled || count === 0 ? 'w-[50%] mx-auto p-3 px-5 ml-auto text-white bg-neutral-500 py-2 rounded-md font-semibold focus:outline-none cursor-not-allowed' : 'w-[50%] mx-auto p-3 px-5 transition-all duration-500 hover:scale-105 ml-auto text-white bg-primaryColor py-2 rounded-md cursor-pointer font-semibold focus:outline-none'}>
            {Enrolled ? 'Enrolled' : 'Enroll'}
          </button>
    </div>
  </div>;
}

export default Event;