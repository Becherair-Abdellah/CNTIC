
// import Button from '../Button'
import IMG from '../../assets/hero.png'
import React from 'react'
import SocialMedia from './SocialMedia'
function Hero() {
  return (
    <div className='md:grid lg:grid-cols-2 gap-[5rem] py-[3rem]'>
      <div className=''>
        <h1 className='text-5xl leading-[4rem] font-bold text-TextredColor mb-8 text-primaryColor'>Bringing Designs to Life Through Code and Creativity</h1>
        <p className=' text-TextColor text-lg leading-8 mb-5 text-gray-700 text-[15px]'>As a Front-End Developer, I specialize in crafting visually engaging and interactive web experiences. With a strong foundation in HTML, CSS, and JavaScript, I create seamless user interfaces using modern frameworks and tools. My passion for design and attention to detail allow me to bring creativity and innovation to every project I work on. Let's build something amazing together!</p>
        {/* <Button /> */}
        <SocialMedia/>
      </div>
      
        <img src={IMG} alt="" className='mt-[3rem]' />
      
    </div>
  )
}

export default Hero