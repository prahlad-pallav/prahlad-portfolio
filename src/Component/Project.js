import React from 'react';
import { FaCode } from "react-icons/fa";

const Project = () => {
  return (
    <div className='mt-10 px-5'>
    <h2 className='max-w-[1200px] mx-auto text-[1.5rem] sm:text-[2rem] font-semibold text-[#0077B6] underline mb-6 text-center lg:text-left lg:text-[2.5rem] '>Project</h2>
   <div className='flex flex-row flex-wrap max-w-[1200px] item-center justify-center mx-auto my-4 gap-5'>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px] shadow-[#0077B6]'>
            <div className='text-[1.5rem] font-semibold mb-2'>Weather DashBoard</div>
            <div className='text-[1rem] italic' >
            Leveraging OpenWeatherMap APIs, I designed intuitive, interactive user interfaces for personalized weather forecasts and implemented client-side Session Storage to retain user preferences and recent locations, enhancing accessibility and user experience.
            </div>
            <div className="flex border-1 rounded-md bg-[#0096C7] p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/Weather-DashBoard"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
        </div>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px]  shadow-[#0077B6]'>
            <div className='text-[1.5rem] font-semibold mb-2'>Password Generator</div>
            <div className='text-[1rem] italic' >
            Developed a secure, user-friendly password generator, integrating best practices and the Fisher Yates algorithm to create customizable, strong passwords using various character sets, ensuring high resistance against common hacking techniques.
            </div>
            <div className="flex border-1 rounded-md bg-[#0096C7] p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/Password-Generator"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
        </div>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px]  shadow-[#0077B6]'>
            <div className='text-[1.5rem] font-semibold mb-2'>Todo Interface</div>
            <div className='text-[1rem] italic' >
            Designed a comprehensive Todo Application using Node.js and Express.js, maintaining a stable RESTful API for client requests, and demonstrated data management proficiency by integrating MongoDB with Mongoose for efficient object modeling, ensuring seamless CRUD operations.
            </div>
            <div className="flex border-1 rounded-md bg-[#0096C7] p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/BackEnd-Development/tree/main/Project%202"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
            
        </div>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px] shadow-[#0077B6]'>
            <div className='text-[1.5rem] font-semibold mb-2'>News Application</div>
            <div className='text-[1rem] italic' >
            Led the creation of a user-friendly News Application, incorporating APIs for real-time updates and utilizing my profound understanding of software development principles, web aesthetics, and user experience to significantly enhance users' information accessibility.
            </div>
            <div className="flex border-1 rounded-md bg-[#0096C7] p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href=""> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
        </div>
        
    </div>
    <div className='flex flex-row flex-wrap max-w-[1200px] item-center justify-center mx-auto my-8'>
        <a href="https://github.com/prahlad-pallav" className='text-[#023E8A] font-semibold underline cursor-pointer'>Other Projects : github.com/prahlad-pallav</a>
        </div>
    </div>
  )
}

export default Project
