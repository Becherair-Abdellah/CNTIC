import React from 'react'

function Card({icon,color,title,nbr}) {
    const style =`font-semibold p-2 md:p-6 rounded-md w-full ${color} `
  return (
    <div className={style}>
    <span className='text-xl mb-4 block'>{title}</span>
    <div className='flex justify-between'>
        {/* <BiBuildings size={60}/> */}
        {icon}
        <h1 className='text-3xl md:text-5xl font-bold'>{nbr}</h1>
    </div>
</div>
  )
}

export default Card
