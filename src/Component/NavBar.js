import React from 'react';
import { Link } from 'react-router-dom';
import Resume from "../Content/Prahlad_CV.pdf"

const NavBar = () => {

  return (
    <div className='w-full shadow-md'>

<div className='flex flex-col flex-wrap  max-w-[1200px] item-center justify-between mx-auto pt-[1rem]  p-2 sm:flex-row gap-4'>
    
    <div  className='font-semibold text-xl sm:text-2xl hover:scale-110 hover:text-[#0077B6] cursor-pointer flex items-center justify-center'>
        <Link to='/'>Prahlad Pallav</Link>
    </div>
    <div className='flex flex-row gap-2 font-semibold text-[0.875rem] sm:text-lg sm:gap-5 md:gap-8 lg:gap-10 sm:flex-row items-center justify-center'>
        <Link to="/" className='hover:text-[#0077B6] cursor-pointer hover:underline'>Home</Link>
        <Link to='/about' className='hover:text-[#0077B6] cursor-pointer hover:underline'>About</Link>
        <Link to="/skill" className='hover:text-[#0077B6] cursor-pointer hover:underline'>Skills</Link>
        <Link to='/project' className='hover:text-[#0077B6] cursor-pointer hover:underline'>Projects</Link>
        <a href={Resume} className='hover:text-[#0077B6] cursor-pointer hover:underline'>Resume</a>
        <Link to='/contact' className='hover:text-[#0077B6] cursor-pointer hover:underline'>Contact</Link>
    </div>

    </div>
    </div>
  
  )
}

export default NavBar