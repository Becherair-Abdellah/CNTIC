import React from 'react'
import User from './User'
import Card from './Card'
import { BiBuildings } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import { RiAdminFill } from 'react-icons/ri'
function Users() {
  return (
    <div className=' mt-5 w-full border-b-2 border-blue-500 relative '>
      {/* intro  */}
      <div className='flex flex-col md:flex-row md:justify-between items-center w-full gap-5'>


        <Card icon={<FaUsers size={50}/>}  color='bg-gradient-to-r from-blue-500 to-pink-500' title='Users' nbr="435k"/>        

        <Card icon={<RiAdminFill size={50}/>}  color='bg-gradient-to-r from-blue-600 to-blue-300' title='Users Dirction' nbr="30"/> 

        <Card icon={<BiBuildings size={50}/>}  color='bg-gradient-to-r from-red-500 to-pink-500' title='Sections' nbr="7"/> 

      </div>
      <p className='text-gray-500 text-md font-semibold mt-8 leading-6 border-l-[3px] border-primaryColor pl-3 md:pl-1'>Hi Admin This All Members in your Website <strong className='text-primaryColor'>CNTIC Club</strong> You can to check of users and you can to block or delete account </p>
      {/* users  */}
      <div className='users mt-7 overflow-hidden overflow-x-visible relative'>
        <div className='overlay hidden w-full h-full absolute left-0 top-0 bg-transparent  z-[1]'></div>
        <ul className='text-gray-500 w-[850px] md:w-full'>
            <li className=' grid grid-cols-manyCustom  p-2 text-white rounded-md mb-2 bg-gradient-to-r from-blue-700 to-blue-500    font-semibold'>
                <span>User</span>
                <span>Number Card</span>
                <span>ID</span>
                <span>State</span>
                <span>Section</span>
                <span>Block</span>
            </li>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Abdellah Becherair" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="El bachir ELQADI" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
           <User name="Mohmaed Anouar" nbrcard={202139049571} ID={32341} state="IT dirction" section="IT"/>
         

        </ul>
      </div>
    </div>
  )
}

export default Users
