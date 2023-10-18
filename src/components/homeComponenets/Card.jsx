import React from 'react'

function Card({title,nbr,description,subject}) {
  return (
      <div className="flex items-center gap-4 bg-white rounded-tl-xl rounded-br-xl shadow-sm relative">
        <span className='w-[90%] h-[1.7px] absolute top-0 right-0 bg-primaryColor'></span>
        <span className='w-[2px] h-[90%] absolute top-0 right-0 bg-primaryColor'></span>
          <div className=" bg-primaryColor flex flex-col gap-1 p-4 rounded-tl-xl rounded-br-xl">
   
       <h1 className='text-white font-bold text-6xl'>{nbr}+</h1>
        <h2 className='text-white text-xl text-center '>title</h2>
    </div>


    <div className="flex flex-col gap-2 ">
        <h3 className='font-bold text-primaryColor text-xl'>{subject}</h3>
        <p className='text-[15px]'>{description}</p>
        <div className='bg-primaryColor text-white  text-[12px] w-fit p-1 px-2 rounded-tl-lg rounded-br-lg cursor-pointer absolute right-0 bottom-0'>
        <a href="" >read more</a>
        </div>
    </div>
</div>
  )
}

export default Card
