import React from 'react';
import gmail_logo from "../Content/gmail.png";
import likedin_logo from "../Content/linkedin.png";
import github_logo from "../Content/github.png";
import instagram_logo from "../Content/instagram.jpeg";
import medium_logo from "../Content/medium.png";

const ContactPage = () => {
  return (
    <div className='mt-10 px-5'>
        <h2 className='max-w-[1200px]  mx-auto text-[1.5rem] sm:text-[2rem] font-semibold text-[#0077B6] underline mb-6 text-center lg:text-left lg:text-[2.5rem]'>Contact Me</h2>
        <div className='flex flex-col max-w-[1200px] item-center justify-between mx-auto'>
        <div className='text-[1.25rem] font-semibold text-[#0077B6] mb-7 text-center lg:text-left lg:text-[1.75rem]'>Questions, Thoughts, Or Just Want To Say Hello?</div>
        <div className='flex flex-row gap-4 items-center py-2 text-center'>
            <div className='w-[30px] sm:w-[40px]'>
                <img src={gmail_logo} alt="" srcset="" className='object-contain' />
            </div>
            <a href="prahladpallav147@gmail.com" className='text-[#023E8A] font-semibold text-[0.875rem] sm:text-xl underline'>prahladpallav147@gmail.com</a>
        </div>
        <div className='flex flex-row gap-4 items-center py-2'>
            <div className='w-[30px] sm:w-[40px]'>
                <img src={likedin_logo} alt="" srcset="" className='object-contain'/>
            </div>
            <a href="prahladpallav147@gmail.com" className='text-[#023E8A] font-semibold text-[0.875rem] sm:text-xl underline'>linkedin.com/in/prahladpallav/</a>
        </div>
        <div className='flex flex-row gap-4 items-center py-2'>
            <div className='w-[30px] sm:w-[40px]'>
                <img src={github_logo} alt="" srcset="" className='object-contain'/>
            </div>
            <a href="https://github.com/prahlad-pallav" className='text-[#023E8A] font-semibold text-[0.875rem] sm:text-xl underline'>github.com/prahlad-pallav</a>
        </div>
        <div className='flex flex-row gap-4 items-center py-2'>
            <div className='w-[30px] sm:w-[40px]'>
                <img src={instagram_logo} alt="" srcset="" className='object-contain'/>
            </div>
            <a href="https://instagram.com/prahlad_pallav" className='text-[#023E8A] font-semibold text-[0.875rem] sm:text-xl underline'>instagram.com/prahlad_pallav/</a>
        </div>
        <div className='flex flex-row gap-4 items-center py-2'>
            <div className='w-[30px] sm:w-[40px]'>
                <img src={medium_logo} alt="" srcset="" className='object-contain'/>
            </div>
            <a href="https://medium.com/@prahladpallav147" className='text-[#023E8A] font-semibold text-[0.875rem] sm:text-xl underline'>medium.com/@prahladpallav147</a>
        </div> 
        </div>
    </div>
  )
}

export default ContactPage