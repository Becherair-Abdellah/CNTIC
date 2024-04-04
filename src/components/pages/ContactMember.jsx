import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetUser } from "../../hooks/useGetUser";
function ContactMember() {
    const {Profile} = useGetUser()
    const userEmail = JSON.parse(localStorage.getItem('user'))?.email
    const [email,setEmail] = useState(userEmail)
    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");
    const handelSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("Title", title);
        formData.append("message", message);
        try {
        fetch("https://backend.cntic-club.com/api/posts/ContactUs/", {
            method: "POST",
            body: formData,
        })
        toast.success("Message Send Successfully", {
            position: "top-right",
            autoClose: 2000, // You can adjust the duration
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
        } catch (error) {
            toast.success("Failed To send The Message", {
                position: "top-right",
                autoClose: 2000, // You can adjust the duration
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    }
    const is_banned = Profile.is_banned
    const navigate = useNavigate()
    const isAuthenticated = useSelector(({ show_and_hide_aside: { authenticated } }) => authenticated);
    return (
        <>
            <div className="mt-16">
                <h2 className="text-[#374151] font-medium text-center ">
                    Our support team is here to listen to our member's opinions
                    and ideas
                </h2>
                <form action="">
                    <div className=" py-8 lo:flex lo:flex-col lo:px-4 md:px-20 lg:px-36 xl:px-60">
                        {!isAuthenticated && (
                            <div className="w-full">
                            <h3 className="text-left font-medium mb-1">Email <span className="text-red-500">*</span></h3>
                            <input
                                type="text"
                                className=" text-black border-2 border-[#dddddd] w-full px-2 py-3 mb-5 focus:outline-none"
                                placeholder="write your theme"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        )}
                        <h3 className="text-left font-medium mb-1">Title <span className="text-red-500">*</span></h3>
                        <input
                            type="text"
                            className=" text-black border-2 border-[#dddddd] px-2 py-3 mb-5 focus:outline-none"
                            placeholder="write your theme"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <h3 className="text-left font-medium mb-1">Message <span className="text-red-500">*</span></h3>
                        <textarea
                            className=" text-black border-2 border-[#dddddd] px-3 py-3 resize-none lo:h-32 mb-5 focus:outline-none"
                            placeholder="write your message"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <input
                            type="submit"
                            disabled={is_banned}
                            className={is_banned ? 'w-fit p-3 px-5 transition-all duration-500 hover:scale-105 ml-auto text-white bg-neutral-400 py-2 rounded-md cursor-not-allowed font-semibold focus:outline-none' : 'w-fit p-3 px-5 transition-all duration-500 hover:scale-105 ml-auto text-white bg-primaryColor py-2 rounded-md cursor-pointer font-semibold focus:outline-none'}
                            value="SEND"
                            onClick={handelSubmit}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactMember;
