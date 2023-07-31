import React from 'react'

const Project = () => {
  return (
    <div className='mt-10 px-5'>
    <h2 className='max-w-[1200px] mx-auto text-[1.5rem] sm:text-[2rem] font-semibold text-[#0077B6] underline mb-6 text-center lg:text-left lg:text-[2.5rem] '>Project</h2>
   <div className='flex flex-col max-w-[1200px] item-center justify-between mx-auto my-4 gap-6'>
        <div>
            <div className='text-[1.75rem] font-semibold'>Weather DashBoard</div>
            <div className='text-[1rem] italic' >
            Leveraging OpenWeatherMap APIs, I designed intuitive, interactive user interfaces for personalized weather forecasts and implemented client-side Session Storage to retain user preferences and recent locations, enhancing accessibility and user experience.
            </div>
        </div>
        <div>
            <div className='text-[1.75rem] font-semibold'>Password Generator</div>
            <div className='text-[1rem] italic' >
            Developed a secure, user-friendly password generator, integrating best practices and the Fisher Yates algorithm to create customizable, strong passwords using various character sets, ensuring high resistance against common hacking techniques.
            </div>
        </div>
        <div>
            <div className='text-[1.75rem] font-semibold'>Todo Interface</div>
            <div className='text-[1rem] italic' >
            Designed a comprehensive Todo Application using Node.js and Express.js, maintaining a stable RESTful API for client requests, and demonstrated data management proficiency by integrating MongoDB with Mongoose for efficient object modeling, ensuring seamless CRUD operations.
            </div>
        </div>
        <div>
            <div className='text-[1.75rem] font-semibold'>News Application</div>
            <div className='text-[1rem] italic' >
            Led the creation of a user-friendly News Application, incorporating APIs for real-time updates and utilizing my profound understanding of software development principles, web aesthetics, and user experience to significantly enhance users' information accessibility.
            </div>
        </div>
        <div>
        <p className='text-[#023E8A] font-semibold underline cursor-pointer'>Other Projects : https://github.com/prahlad-pallav</p>
        </div>
    </div>
    </div>
  )
}

export default Project