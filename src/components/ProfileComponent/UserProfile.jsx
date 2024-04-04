import React, { useEffect, useRef, useState } from 'react'
import './profile.css'
import User from '../../assets/user_1.svg'
import User2 from '../../assets/user2.svg'
import Mail from '../../assets/mail.svg'
import City from '../../assets/city.svg'
import Badge from '../../assets/badge.svg'
import EditButton from '../../assets/editButton.svg'
import Group3 from '../../assets/Group 3.svg'
import { useGetUser } from '../../hooks/useGetUser'
import { useGetToken } from '../../hooks/useGetToken'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UserProfile() {
    const { Profile } = useGetUser();
    console.log(Profile);
    const {headers} = useGetToken();
    const [newImage, setNewImage] = useState('');
    const [email, setEmail] = useState(Profile.email);
    const [name, setName] = useState(Profile.name);
    const [phone, setPhone] = useState(Profile.phone);
    const [univId, setUnivId] = useState(Profile.univ_id);
    const Ref = useRef();
    // fntic.cntic@gmail.com
    // cntic-club.2024
    useEffect(() => {
        if(Profile) {
            setEmail(Profile.email);
            setName(Profile.name);
            setPhone(Profile.phone);
            setUnivId(Profile.univ_id);
            // setNewImage(Profile.picture);
        }
    }, [Profile]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(!file) {
        console.log('No file selected');
        return;
        };
        setNewImage(e.target.files[0]);
    };       
    
    const handleSaveButtonClick = async () => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('univ_id', univId);
        formData.append('picture', newImage);
        try {
            const response = await fetch('https://backend.cntic-club.com/api/posts/Update_Profile/', {
                method: 'PATCH',
                headers: {
                    ...headers,
                },
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Failed to update profile');
            }
            const data = await response.json();
            console.log('Profile updated:', data);
            toast.success("Profile Updated Successfully.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        } catch (error) {
            toast.error("Failed To Update Profile", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };
    console.log(Profile.is_banned);
    return Profile.is_banned ? (
        <p className='text-red-500 text-4xl text-center'>you are banned</p>
    ) : (
        <form 
        onSubmit={(e) => {
            e.preventDefault();
            handleSaveButtonClick();
        }}
        className='flex justify-center items-center gap-20 m-10 mt-20 flex-col md:flex-row md:gap-10'>
            <div className='flex justify-end items-end relative UserPhoto p-5'>
                <img src={Group3} alt="" className='absolute top-[-25px] right-5 group3 bg-white mx-6' />
                {newImage ? (
                    <img src={URL.createObjectURL(newImage)} alt="Uploaded Image" className="w-64 h-64 rounded-full" />
                ) : (
                    <img src={'https://backend.cntic-club.com'+Profile.picture} alt="Profile Picture" className="w-64 h-64 rounded-full" />
                )}
                <input ref={Ref} type="file" className='hidden' onChange={handleImageChange} />
                    <img
                    src={EditButton}
                    alt=""
                    className='cursor-pointer w-10 h-10 z-10 absolute right-5 bottom-8 bg-gray-200 bg-opacity-70 rounded-[10px] p-2 transition-all duration-500 hover:w-12 hover:h-12'
                    onClick={() => Ref.current.click()}
                />
                <img src={Group3} alt="" className='absolute bottom-[-15px] left-5' />
            </div>
            <div onSubmit={(e) => {
                    e.preventDefault();
                    handleSaveButtonClick();
                }}
                action="" 
                className='relative flex justify-start items-center gap-5 w-full md:w-[40%] flex-wrap py-9 px-5 md:p-10 UserForm'>
                <p className='absolute top-[-5%] md:top-[-12%] right-12 text-[#0044AA] text-[20px] md:text-[40px] font-[700] bg-white px-5 z-10'>Your information</p>
                <img src={User} alt="" className='absolute top-[-9%] left-[-5%] md:top-[-12%] md:left-[-3%] w-14 h-14 bg-white z-10' />
                <div className='flex flex-col justify-start items-start w-full md:w-[50%]'>
                    <label className=''>Email</label>
                    <div className='flex justify-center items-center gap-5 bg-gray-200 rounded-[10px] p-2'>
                        <img src={Mail} alt="" className='w-7 h-7' />
                        <input type="email" id='email' className=' bg-gray-200 w-fit' defaultValue={Profile.email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start w-full md:w-[46%]'>
                    <label htmlFor="name">Name</label>
                    <div className='flex justify-center items-center gap-5 bg-gray-200 rounded-[10px] p-2'>
                        <img src={User2} alt="" className='w-7 h-7' />
                        <input type="text" id='name' className='bg-gray-200 rounded-md outline-none' defaultValue={Profile.name} onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start w-full md:w-[50%]'>
                    <label htmlFor="phone" className='w-full'>Phone Number</label>
                    <div className='flex justify-center items-center gap-5 bg-gray-200 rounded-[10px] p-2'>
                        <img src={Badge} alt="" className='w-7 h-7' />
                        <input type="text" id='phone' className='bg-gray-200 rounded-md outline-none' defaultValue={Profile.phone} onChange={(e) => setPhone(e.target.value)}
                            />
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start w-full md:w-[46%]'>
                    <label htmlFor="univ_id" className='w-full'>University ID</label>
                    <div className='flex justify-center items-center gap-5 bg-gray-200 rounded-[10px] p-2'>
                        <img src={Badge} alt="" className='w-7 h-7' />
                        <input type="text" id='univ_id' className='bg-gray-200 rounded-md outline-none' defaultValue={Profile.univ_id} onChange={(e) => setUnivId(e.target.value)}
                            />
                    </div>
                </div>
                <div className='absolute bottom-[-5%] md:bottom-[-12px] left-0 flex flex-row'>
                    <img src={Group3} alt="" className='' />
                    <img src={Group3} alt="" className='' />
                    <img src={Group3} alt="" className='hidden md:block' />
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center w-[96%]'>
                {/* <button type='button' className='bg-[#0044AA] text-white rounded-[10px] p-2 w-40 h-14 mt-5 transition-all duration-500 hover:scale-105' onClick={handleEditButtonClick}>Edit</button> */}
                <button type="submit" className='bg-[#0044AA] text-white rounded-[10px] p-2 w-40 h-14 mt-5 transition-all duration-500 hover:scale-105'>Save</button>
                </div>
            </div>
            <ToastContainer />
        </form>
    )
}

export default UserProfile