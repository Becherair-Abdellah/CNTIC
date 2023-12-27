import React from 'react'
import UserProfile from "./UserProfile"
import TopShape from '../../assets/topShape.svg'
import TopRightShape from '../../assets/topRightShape.svg'
import BottomShape from '../../assets/bottomShape.svg'
import Group3 from '../../assets/Group 3.svg'
function Profile() {
    return (
        <section>
            <div className='flex flex-col justify-center items-center gap-y-5 p-3 relative'>
                <img src={TopShape} alt="" className='absolute top-0 left-0 w-32 h-32 hidden md:block' />
                <img src={TopRightShape} alt="" className='absolute top-0 right-0 w-32 h-32 hidden md:block' />
                <img src={BottomShape} alt="" className='absolute bottom-0 left-0 w-32 h-32 hidden md:block' />
                <div className='absolute bottom-0 right-0 hidden md:flex justify-center items-center gap-0'>
                    <img src={Group3} alt="" />
                    <img src={Group3} alt="" />
                    <img src={Group3} alt="" />
                </div>
                <p className='text-[50px] md:text-[85px] text-[#3067B1]'>Hi Abdellah  👋</p>
                <p className='text-[35px] md:text-[85px] text-[#3067B1]'>welcom in your profile</p>
            </div>
            <UserProfile />
        </section>
    )
}

export default Profile