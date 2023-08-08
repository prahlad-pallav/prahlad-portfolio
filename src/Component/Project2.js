import React from 'react';
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Project2 = () => {
  return (
    <div className='mt-10 px-5'>
    <h2 className='max-w-[1200px] mx-auto text-[1.5rem] sm:text-[2rem] font-semibold text-[#0077B6] underline mb-6 text-center lg:text-left lg:text-[2.5rem] '>Project</h2>
   <div className='flex flex-row flex-wrap max-w-[1200px] item-center justify-center mx-auto my-4 gap-5'>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px] shadow-red-500'>
            <div className='text-[1.3rem] font-semibold mb-2'>Weather DashBoard</div>
            <div className='text-[1rem] italic' >
            Leveraging OpenWeatherMap APIs, I designed intuitive, interactive user interfaces for personalized weather forecasts and implemented client-side Session Storage to retain user preferences and recent locations, enhancing accessibility and user experience.
            </div>
            <div className="flex border-1 rounded-md bg-red-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/Weather-DashBoard"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
        </div>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px]  shadow-orange-500'>
            <div className='text-[1.3rem] font-semibold mb-2'>Password Generator</div>
            <div className='text-[1rem] italic' >
            Developed a secure, user-friendly password generator, integrating best practices and the Fisher Yates algorithm to create customizable, strong passwords using various character sets, ensuring high resistance against common hacking techniques.
            </div>
            <div className="flex border-1 rounded-md bg-orange-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/Password-Generator"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
        </div>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px]  shadow-yellow-500'>
            <div className='text-[1.3rem] font-semibold mb-2'>Todo Interface</div>
            <div className='text-[1rem] italic' >
            Designed a comprehensive Todo Application using Node.js and Express.js, maintaining a stable RESTful API for client requests, and demonstrated data management proficiency by integrating MongoDB with Mongoose for efficient object modeling, ensuring seamless CRUD operations.
            </div>
            <div className="flex border-1 rounded-md bg-yellow-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/BackEnd-Development/tree/main/Project%202"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
            
        </div>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px] shadow-green-500'>
            <div className='text-[1.3rem] font-semibold mb-2'>News Application</div>
            <div className='text-[1rem] italic' >
            Led the creation of a user-friendly News Application, incorporating APIs for real-time updates and utilizing my profound understanding of software development principles, web aesthetics, and user experience to significantly enhance users' information accessibility.
            </div>
            <div className="flex border-1 rounded-md bg-green-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/News-App"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
        </div>

        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px] shadow-blue-500'>
            <div className='text-[1.3rem] font-semibold mb-2'>AuthN-AuthZ</div>
            <div className='text-[1rem] italic' >
            Authentication and authorization system for users (login and signup) with JWT and brcypt password encryption. Protecting routes for specific roles  with middleware functions to check the JWT and user’s role. Implemented Cookie-parser and express.json to handle incoming requests.


            </div>
            <div className="flex border-1 rounded-md bg-blue-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/AuthN-AuthZ"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
        </div>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px] shadow-indigo-500'>
            <div className='text-[1.3rem] font-semibold mb-2'>File Upload</div>
            <div className='text-[1rem] italic' >
            A server application that allows users to upload images and videos to the server which uses express file uploader middleware to handle file requests. The uploaded files are then stored on Cloudinary. It also sends an email to the user who uploaded the file, containing a link of the uploaded file.


            </div>
            <div className="flex border-1 rounded-md bg-indigo-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/FileUpload"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
        </div>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px] shadow-violet-500'>
            <div className='text-[1.3rem] font-semibold mb-2'>Blog Application</div>
            <div className='text-[1rem] italic' >
            Leverage the power of ReactJS to build intuitive, user-friendly blog applications. With the Context API, data sharing among components is no longer a daunting task. This project ensures seamless state management across components without prop-drilling, offering a cleaner codebase. 


            </div>
            <div className="flex border-1 rounded-md bg-violet-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/BlogApp"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
        </div>
        <div className='border-2 p-3 rounded-md shadow-md px-3 max-w-[275px] shadow-slate-500'>
            <div className='text-[1.3rem] font-semibold mb-2'>Random Gif Generator</div>
            <div className='text-[1rem] italic' >
            Dive into the entertaining realm of ReactJS with a unique project. This project utilizes an API to fetch and display random GIFs. With its sleek interface, enjoy a seamless, dynamic experience. Add fun features like favorite GIFs or share options, making this platform engaging and user-friendly.


            </div>
            <div className="flex border-1 rounded-md bg-slate-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div><a href="https://github.com/prahlad-pallav/Gif-App"> Source Code </a></div>
            <div className="text-sm"><FaCode /></div>
            </div>
        </div>
        
    </div>
    <div className='flex flex-row flex-wrap max-w-[1200px] item-center justify-center mx-auto my-8'>
        <div className='text-[#023E8A] font-semibold underline cursor-pointer text-md sm:text-xl flex gap-1 items-center'><a href="https://github.com/prahlad-pallav" >Other Projects : github.com/prahlad-pallav </a> <FaLink /></div> 
        </div>
    </div>
  )
}

export default Project2