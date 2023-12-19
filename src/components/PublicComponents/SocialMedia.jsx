import React from 'react'
import { BsLinkedin, BsGithub} from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function SocialMedia() {
  return (
    <div className='flex mt-8 w-fit items-center gap-3' >
      <Link to="https://www.linkedin.com/in/abdellah-becherair-198825263/">
        <BsLinkedin size={25} className='text-TextColor cursor-pointer text-primaryColor' />
      </Link>
      <Link to="mailto:abdellah.becherair04@gmail.com">
        <MdAlternateEmail size={25} className='text-TextColor cursor-pointer text-primaryColor' />
      </Link>

      <Link to="https://github.com/Becherair-Abdellah" >
        <BsGithub size={25} className='cursor-pointer text-primaryColor' />
      </Link>

      <Link to="https://twitter.com/AbdellahBecher">
        <FaTwitterSquare size={25} className='text-TextColor cursor-pointer text-primaryColor' />
      </Link>
    </div>
  )
}

export default SocialMedia