import React, { useState } from 'react'
import './profile.css'
import User from '../../assets/user_1.svg'
import User2 from '../../assets/user2.svg'
import Mail from '../../assets/mail.svg'
import City from '../../assets/city.svg'
import Badge from '../../assets/badge.svg'
import EditButton from '../../assets/editButton.svg'
import Group3 from '../../assets/Group 3.svg'
import { useGetUser } from '../../hooks/useGetUser'
function UserProfile() {
    const { Profile } = useGetUser();
    console.log(Profile.picture)
    return Profile.is_banned ? (
        <p className='text-red-500 text-4xl text-center'>you are banned</p>
    ) : (
        <div className='flex justify-center items-center gap-20 m-10 mt-20 flex-col md:flex-row md:gap-10'>
            <div className='flex justify-end items-end relative UserPhoto p-5'>
                <img src={Group3} alt="" className='absolute top-[-25px] right-5 group3 bg-white mx-6' />
                <img src={Profile.picture} alt="Profile Picture" className="w-64 h-64" />
                <img src={EditButton} alt="" className='cursor-pointer w-10 h-10 z-10 absolute right-5 bottom-8 bg-gray-200 bg-opacity-70 rounded-[10px] p-2' />
                <img src={Group3} alt="" className='absolute bottom-[-15px] left-5' />
            </div>
            <form action="" className='relative flex justify-start items-center gap-5 w-full md:w-[40%] flex-wrap py-9 px-5 md:p-10 UserForm'>
                <p className='absolute top-[-5%] md:top-[-12%] right-12 text-[#0044AA] text-[20px] md:text-[40px] font-[700] bg-white px-5 z-10'>Your information</p>
                <img src={User} alt="" className='absolute top-[-9%] left-[-5%] md:top-[-12%] md:left-[-3%] w-14 h-14 bg-white z-10' />
                <div className='flex flex-col justify-start items-start w-full md:w-[50%]'>
                    <label className=''>Email</label>
                    <div className='flex justify-center items-center gap-5 bg-gray-200 rounded-[10px] p-2'>
                        <img src={Mail} alt="" className='w-7 h-7' />
                        <input type="email" id='email' className='outline-none bg-gray-200' defaultValue={Profile.email} />
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start w-full md:w-[46%]'>
                    <label htmlFor="name">Name</label>
                    <div className='flex justify-center items-center gap-5 bg-gray-200 rounded-[10px] p-2'>
                        <img src={User2} alt="" className='w-7 h-7' />
                        <input type="text" id='name' className='bg-gray-200 rounded-md outline-none' defaultValue={Profile.name} />
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start w-full md:w-[50%]'>
                    <label htmlFor="specialty" className='w-full'>Phone Number</label>
                    <div className='flex justify-center items-center gap-5 bg-gray-200 rounded-[10px] p-2'>
                        <img src={Badge} alt="" className='w-7 h-7' />
                        <input type="text" id='specialty' className='bg-gray-200 rounded-md outline-none' defaultValue={Profile.phone} />
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start w-full md:w-[46%]'>
                    <label htmlFor="specialty" className='w-full'>University ID</label>
                    <div className='flex justify-center items-center gap-5 bg-gray-200 rounded-[10px] p-2'>
                        <img src={Badge} alt="" className='w-7 h-7' />
                        <input type="text" id='specialty' className='bg-gray-200 rounded-md outline-none' defaultValue={Profile.univ_id} />
                    </div>
                </div>
                <div className='absolute bottom-[-5%] md:bottom-[-12px] left-0 flex flex-row'>
                    <img src={Group3} alt="" className='' />
                    <img src={Group3} alt="" className='' />
                    <img src={Group3} alt="" className='hidden md:block' />
                </div>
            </form>
        </div >
    )
}

export default UserProfile