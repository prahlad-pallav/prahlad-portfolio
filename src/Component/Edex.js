import React from 'react';
import iitd_logo from "../Content/iitd logo.png";
import park_logo from "../Content/park logo.jpeg";
import radiant_logo from "../Content/radiant logo.png";
import mobishaala_logo from "../Content/mobishaala logo.png";
import blood_logo from "../Content/blood logo.jpeg";
import hindi_logo from "../Content/hindi logo.jpeg";
 
const Edex = () => {
  return (
    <div className='flex flex-col max-w-[1200px] item-center justify-between mx-auto mt-10 md:flex-row px-5 gap-5'>

    <div>
        <div className='text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold text-[#0077B6] underline mb-10' >Education</div>
        <div className='flex flex-row gap-5 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105'>
            <div>
                <img src={iitd_logo} alt="" srcset="" width={90}/>
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-[1rem] sm:text-[1.5rem]'>Indian Institute of Technology Delhi</h2>
                <p className='italic text-[0.875rem] sm:text-[1.25rem]'>B.Tech in Engineering Physics</p>
                <p className='font-bold text-[0.875rem] sm:text-[1.25rem]'>2019 - 2023</p>
            </div>
        </div>

        <div className='flex flex-row gap-5 mt-8 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105'>
            <div>
                <img src={park_logo} alt="" srcset="" width={90}/>
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-[1rem] sm:text-[1.5rem]'>Park Mount Public School, Patna</h2>
                <p className='italic text-[0.875rem] sm:text-[1.25rem]'>Class 12 Senior Secondary (CBSE)</p>
                <p className='font-bold text-[0.875rem] sm:text-[1.25rem]'>2019</p>
            </div>
        </div>

        <div className='flex flex-row gap-5 mt-8 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105' >
            <div>
                <img src={radiant_logo} alt="" srcset="" width={90}/>
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-[1rem] sm:text-[1.5rem]'>Radiant International School, Patna</h2>
                <p className='italic text-[0.875rem] sm:text-[1.25rem]'>Class 10 Secondary (CBSE)</p>
                <p className='font-bold text-[0.875rem] sm:text-[1.25rem]'>2017</p>
            </div>
        </div>
    </div>

    <div>
        <div className='text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold text-[#0077B6] underline mb-10' >Experience</div>
        <div className='flex flex-row gap-5 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105'>
            <div>
                <img src={mobishaala_logo} alt="" srcset="" width={90}/>
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-[1rem] sm:text-[1.5rem]'>Front End Developer</h2>
                <p className='italic text-[0.875rem] sm:text-[1.25rem]'>Mobishaala Edutech Private Limited, Bangalore </p>
                <p className='font-bold text-[0.875rem] sm:text-[1.25rem]'>June, 2022 - July, 2022</p>
            </div>
        </div>

        <div className='flex flex-row gap-5 mt-8 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105'>
            <div>
                <img src={blood_logo} alt="" srcset="" width={90}/>
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-[1rem] sm:text-[1.5rem]'>Creative Executive</h2>
                <p className='italic text-[0.875rem] sm:text-[1.25rem]'>Blood Connect Foundation, India</p>
                <p className='font-bold text-[0.875rem] sm:text-[1.25rem]'>October, 2021 - December, 2022</p>
            </div>
        </div>

        <div className='flex flex-row gap-5 mt-8 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105'>
            <div>
                <img src={hindi_logo} alt="" srcset="" width={90}/>
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-[1rem] sm:text-[1.5rem]'>Design Executive</h2>
                <p className='italic text-[0.875rem] sm:text-[1.25rem]'>Hindi Samiti, BRCA, IIT Delhi</p>
                <p className='font-bold text-[0.875rem] sm:text-[1.25rem]'>July, 2021 - May, 2022</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Edex