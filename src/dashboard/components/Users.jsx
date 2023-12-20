import React from 'react'
function Users() {
  return (
    <div className='mt-5 w-full '>
      {/* intro  */}
      <div className='flex justify-between items-center w-full'>
        <div>
        <h1 className="text-2xl relative px-2 py-1 text-white bg-primaryColor text-center font-bold ">
             Users
            <span className='w-[20px] h-[3px] absolute top-[-.43rem] right-[-.43rem]  bg-primaryColor'></span>
    <span className='w-[3px] h-[20px] absolute top-[-.43rem] right-[-.43rem] bg-primaryColor'></span>

    <span className='w-[20px] h-[3px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor'></span>
    <span className='w-[3px] h-[20px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor'></span></h1>
        </div>
        <div className='text-primaryColor font-semibold'>2023 / 2024</div>
      </div>
      <p className='text-gray-500 text-md font-semibold mt-8 leading-6 border-l-[3px] border-primaryColor pl-3 md:pl-1'>Hi Admin This All Members in your Website <strong className='text-primaryColor'>CNTIC Club</strong> You can to check of users and you can to block or delete account </p>
      {/* users  */}
      <div className='mt-7'>
        <ul className='text-gray-500 '>
            <li className=' grid grid-cols-manyCustom bg-primaryColor p-1 text-white rounded-md mb-2'>
                <span>User</span>
                <span>Number Card</span>
                <span>ID</span>
                <span>State</span>
                <span>Section</span>
                <span>Block</span>
            </li>
            {/* users  */}
            <li className=' grid grid-cols-manyCustom bg-gray-100 p-1 text-gray-600 rounded-md mb-2 relative'>
                <span>Abdellah Becherair</span>
                <span>202139049571</span>
                <span>524</span>
                <span>IT Dirction</span>
                <span>IT</span>
                <span
                    className='text-white bg-red-500 rounded-md cursor-pointer flex justify-center items-center font-bold
                    absolute right-0 top-0 h-full w-[40px]'>
                        x
                   
                </span>
            </li>
        </ul>
      </div>
      {/* statistics */}
      <div></div>
    </div>
  )
}

export default Users
