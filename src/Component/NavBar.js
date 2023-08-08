import React from 'react';
import { Link } from 'react-router-dom';
import Resume from "../Content/Prahlad_CV.pdf";
import toast from 'react-hot-toast';
import prahlad_logo from "../Content/Prahlad_logo.png"

const NavBar = () => {

  const home = () => toast.success('Welcome to Home');
  const about = () => toast.success('About Section');
  const skill = () => toast.success('Skill Section');
  const project = () => toast.success('Project Section');
  const resume = () => toast.success('Resume Section');
  const contact = () => toast.success('Contact Section');

  return (
    <div>
    <div className='w-full shadow-md fixed bg-white top-0 z-100'>

    <div className='flex flex-col flex-wrap  max-w-[1200px] item-center justify-between mx-auto p-3 sm:flex-row gap-4'>
    
    <div  className='font-semibold text-xl sm:text-2xl hover:scale-110 hover:text-[#0077B6] cursor-pointer flex items-center justify-center'>
        <Link to='/'><img src={prahlad_logo} width={80}/></Link>
    </div>
    <div className='flex flex-row gap-2 font-semibold text-[0.875rem] sm:text-lg sm:gap-5 md:gap-8 lg:gap-10 sm:flex-row items-center justify-center'>
        <Link to="/" onClick={home} className='hover:text-[#0077B6] cursor-pointer hover:underline'>Home</Link>
        <Link to='/about' onClick={about} className='hover:text-[#0077B6] cursor-pointer hover:underline '>About</Link>
        <Link to="/skill" onClick={skill} className='hover:text-[#0077B6] cursor-pointer hover:underline'>Skills</Link>
        <Link to='/project' onClick={project} className='hover:text-[#0077B6] cursor-pointer hover:underline'>Projects</Link>
        <Link to='/contact' onClick={contact} className='hover:text-[#0077B6] cursor-pointer hover:underline'>Contact</Link>
        <a href={Resume} onClick={resume} className=' flex gap-2 items-center rounded-md border-2 px-1  border-[#0096C7] font-semibold hover:bg-[#0096C7] hover:text-white'>Resume</a>
    </div>

    </div>
    </div>
    <div className='w-full h-[100px] bg-white'></div>
    </div>
  
  )
}

export default NavBar