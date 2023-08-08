import React from 'react';
import java_logo from "../Content/java.png";
import cpp_logo from "../Content/cpp.png";
import python_logo from "../Content/python.jpeg";
import git_logo from "../Content/git.png";
import mysql_logo from "../Content/mysql.png";
import html_logo from "../Content/html.png";
import css_logo from "../Content/css.png";
import javascript_logo from "../Content/javascript.png";
import bootstrap_logo from "../Content/bootstrap.jpeg";
import tailwind_logo from "../Content/tailwind.png";
import mongodb_logo from "../Content/mongodb.png";
import express_logo from "../Content/express.png";
import react_logo from "../Content/react.png";
import nodejs_logo from "../Content/nodejs.png";
import npm_logo from "../Content/npm.png";
import redux_logo from "../Content/redux.png";
import mongoose_logo from "../Content/mongoose.png";
import postman_logo from "../Content/postman.png";
import figma_logo from "../Content/figma.png";
import abodexd_logo from "../Content/adobexd.png";

const TechStack = () => {
  return (
    <div className=' md:max-h-max px-5'>
    <div className='mt-10'>
        <div className='max-w-[1200px] mx-auto text-[1.5rem] sm:text-[2rem] font-semibold text-[#0077B6] underline mb-6 text-center lg:text-left lg:text-[2.5rem]'>Me and My Tech Stack</div>
    <div className='flex flex-col-reverse max-w-[1200px] items-center justify-center gap-5 mx-auto lg:flex-row lg:justify-between'>
    
    <div className='max-w-[600px] font-normal text-[0.875rem] sm:text-[1rem] text-justify '>
        <div>
        As a Research Engineer specializing in software and web development, I command a robust technical repertoire. For software development, my proficiency lies in Java, C++, and Python, combined with version control using Git and data management using MySQL. In the realm of web development, I'm adept at HTML, CSS, and JavaScript, and leverage frameworks and libraries like Bootstrap, Tailwind CSS, Express, ReactJS, and NodeJS. I utilize NPM for package management, Redux for state management, Mongoose to interface with MongoDB, and Postman for API development. My design capabilities encompass tools like Figma and Adobe Creative Cloud, enabling me to deliver comprehensive, high-quality solutions.
        </div>
    </div>

    <div>
        {/* <div className ='absolute top-0 w-[100px] h-[100px] bg-sky-500 -z-10 -translate-y-6 transition duration-150 ease-out'></div> */}

        <div className='flex flex-row gap-8 items-center '>
            <div>
                <img src={java_logo} alt="" srcset="" width={55} className='hover:scale-110' />
            </div>
            <div>
                <img src={cpp_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={python_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={git_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={mysql_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
        </div>

        <div className='flex flex-row gap-8 items-center mt-4'>
            <div>
                <img src={html_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={css_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={javascript_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={bootstrap_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={tailwind_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
        </div>

        <div className='flex flex-row gap-8 items-center mt-4'>
            <div>
                <img src={mongodb_logo} alt="" srcset="" width={60}  className='object-contain max-h-[60px] hover:scale-110'/>
            </div>
            <div>
                <img src={express_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={react_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={nodejs_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={npm_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
        </div>

        <div className='flex flex-row gap-8 items-center mt-4'>
            <div>
                <img src={redux_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={mongoose_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={postman_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={figma_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
            <div>
                <img src={abodexd_logo} alt="" srcset="" width={60} className='hover:scale-110'/>
            </div>
        </div>
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default TechStack