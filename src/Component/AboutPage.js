import React from 'react';
import prahlad_img from "../Content/prahlad.jpg"
import Edex from './Edex';
// import anime1 from "../Content/anime1.jpg";
// import anime2 from"../Content/anime2.jpg";
 
const AboutPage = () => {
  return (

    <div className='px-5 '>

    <div className='mt-10 lg:max-h-max '>

        <div className=' max-w-[1200px] mx-auto text-[1.5rem] sm:text-[2rem] font-semibold text-[#0077B6] underline mb-6 text-center lg:text-left lg:text-[2.5rem]'>About Me

        </div>

    <div className='flex flex-col max-w-[1080px] item-center justify-between mx-auto my-4  gap-6 md:flex-row'>

    <div className='md:min-w-[500px] flex items-center justify-center'>
        <img src={prahlad_img} alt="" srcset="" className='w-[250px] md:w-[400px]  shadow-md'/>
    </div>
    
    <div>
    <div className='flex flex-col items-start justify-center gap-4 my-12'>

        <div>
        <h2 className='text-[1.5rem] sm:text-[2rem]'>I am <span className='text-[#0096C7] uppercase animate-fade-left animate-once animate-ease-linear animate-normal animate-fill-forwards'>Prahlad Pallav</span></h2>
        </div>
        <div>
        <h2 className='text-[1rem] sm:text-[1.2rem] font-semibold italic'>Progress brings satisfaction and peace. Stagnancy brings anxiety.</h2>
        </div>
        <div>
            <p className='text-[0.875rem] sm:text-[1rem] font-medium text-justify' >I am a skilled Research Engineer with a degree in Engineering Physics from the renowned Indian Institute of Technology (IIT) Delhi, class of 2023. My areas of expertise lie in software and web development, where I apply my robust technical knowledge to drive innovation and progress. By integrating the principles of physics and engineering, I have proven my ability to devise solutions that maximize the efficacy of existing systems while also developing new technologies. My unique blend of an elite educational background and specialized skill set enables me to make significant, pioneering contributions in my field of research and practice.</p>
        </div>
        <div>
            <p className='text-[0.875rem] sm:text-[1rem] italic' >“It’s easier to change yourself than to change the world.” -<span className='font-semibold'> Naval Ravikant</span> </p>
        </div>
    </div>

    </div>

    </div>
    </div>
    <Edex />
    </div>
    
  )
}

export default AboutPage