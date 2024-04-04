import React, { useEffect, useState } from 'react'
import User from './User'
import Card from './Card'
import { BiBuildings } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import { RiAdminFill } from 'react-icons/ri'
import { useGetToken } from '../../hooks/useGetToken'
function Users() {
  const {headers} = useGetToken()
  const [Users,setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const url = `https://backend.cntic-club.com/api/All_Profiles/`
      const response = await fetch(
        url,
        {
          method: "GET",
          headers: {
            ...headers
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setUsers(data)
    }catch(error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getAllUsers()
  },[])
  return (
    <div className=' mt-5 w-full border-b-2 border-blue-500 relative '>
      {/* intro  */}
      <div className='flex flex-col md:flex-row md:justify-between items-center w-full gap-5'>
        <Card icon={<FaUsers size={50}/>}  color='bg-gradient-to-r from-red-500 to-[#0058ff]' title='Users' nbr="435k"/>        
        <Card icon={<RiAdminFill size={50}/>}  color='bg-gradient-to-r from-[#0058ff] to-[#3195ff]' title='Users Dirction' nbr="30"/> 
        <Card icon={<BiBuildings size={50}/>}  color='bg-gradient-to-r from-red-500 to-pink-500' title='Sections' nbr="7"/> 
      </div>
      <p className='text-gray-500 text-md font-semibold mt-8 leading-6 border-l-[3px] border-primaryColor pl-3 md:pl-1'>Hi Admin This All Members in your Website <strong className='text-primaryColor'>CNTIC Club</strong> You can to check of users and you can to block or delete account </p>
      {/* users  */}
      <div className='users mt-7 overflow-hidden overflow-x-visible relative'>
        <div className='overlay hidden w-[850px] md:w-full h-full absolute left-0 top-0 bg-transparent  z-[1]'></div>
        <ul className='text-gray-500 w-[850px] md:w-full'>
            <li className='grid grid-cols-4 p-2 text-white rounded-md mb-2 bg-gradient-to-r from-red-500 to-[#0058ff]     font-semibold'>
                <span>User</span>
                <span>Number Card</span>
                <span>ID</span>
                <span>Ban</span>
            </li>
            {Users.map((user,index)=>{
              return <User key={index} name={user.name} nbrcard={user.univ_id} ID={user.user} userId={user.id} is_banned={user.is_banned}/>
            }
            )}
        </ul>
      </div>
    </div>
  )
}

export default Users
