import React from 'react';
import prahlad_img from "../Content/prahlad.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import AboutPage from './AboutPage';
import TechStack from './TechStack';
import Project from './Project';
import ContactPage from './ContactPage';
import Footer from './Footer';
import { Link } from 'react-router-dom';



const HomePage = () => {

    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
    <div className='flex flex-col-reverse max-w-[1200px] item-center justify-between mx-auto my-6  lg:flex-row px-5 gap-5'>
    
    <div className='flex flex-col items-center justify-center gap-2 lg:items-start'>
        <div>
        <h2 className='text-[1.5rem] sm:text-[2.25rem] md:text-[2.5rem]'>Hi! <span className='text-[#0096C7]'>Prahlad Pallav</span></h2>
        </div>
        <div className='text-[1.2rem] sm:text-[2rem] md:[2.75rem]'>
        I am a <span ref={el} className='font-semibold text-[#0077B6]'></span>
        </div>
        <div>
            <p className='text-[.75rem] sm:text-[1rem] font-semibold text-left' >I’m a Research Engineer and here is my portfolio website. </p>
        </div>
        <div>
            <p className='text-[.75rem] sm:text-[1rem] font-semibold' >Here you’ll learn about my journey.</p>
        </div>
        <div className='mt-5'>
            <Link to='/contact' className='rounded-sm border-2 p-1  sm:p-2 border-[#0096C7] font-semibold animate-pulse animate-infinite animate-ease-linear animate-normal animate-fill-forwards'>Contact</Link>
        </div>
    </div>
    <div className='flex flex-col i gap-4 md:min-w-[500px] items-center justify-center'>
        <img src={prahlad_img} alt="" srcset="" className='w-[250px] md:w-[400px]'/>
    </div>
    
    </div>
    <AboutPage />
    <TechStack />
    <Project />
    <ContactPage />
    <Footer />
    </div>
  )
}

export default HomePage

