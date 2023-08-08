import React from 'react';
import {useState} from 'react';
import { FaRegPaperPlane } from "react-icons/fa";

const Form = () => {

  const[formData, setFormData] = useState({name :"" , email:"", subject:"", message:""});

  function changeHandler(event){

    const{name, value, checked, type} = event.target;

    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
    <form onSubmit={submitHandler}>

        <div className='flex flex-col max-w-[400px] mx-auto gap-1  shadow-md shadow-blue-200 mb-2'>
        <input type="text" name='name' placeholder='Enter Your Name' required className='border-1 border-black p-2 m-2 placeholder:text-slate-600' onChange={changeHandler} value={formData.name}/>
        </div>
        <div className='flex flex-col max-w-[400px] mx-auto gap-1  shadow-md shadow-blue-200 mb-2'>
        <input type="email" name='email'  placeholder="Enter Your Email Address" required className='border-1 border-black p-2 m-2 placeholder:text-slate-600' onChange={changeHandler} value={formData.email}/>
        </div>
        <div className='flex flex-col max-w-[400px] mx-auto gap-1  shadow-md shadow-blue-200 mb-2'>
        <input type="text" name='subject' placeholder='Subject' required className='border-1 border-black p-2 m-2 placeholder:text-slate-600' onChange={changeHandler} value={formData.subject}/>
        </div>
        <div className='flex flex-col max-w-[400px] mx-auto gap-1  shadow-md shadow-blue-200 mb-2 min-h-[100px]'>
        <textarea type="text" name='message'  placeholder='Message' required className='border-1 border-black p-2 m-2 placeholder:text-slate-600' onChange={changeHandler} value={formData.message}/>
        </div>
        <div className='flex items-center justify-center max-w-[100px] mx-auto rounded-md mt-4'>
        <button><div className=' flex gap-2 items-center rounded-md border-2 p-1 sm:p-2 border-[#0096C7] font-semibold hover:bg-[#0096C7] hover:text-white '> Submit <FaRegPaperPlane/></div></button> 
        </div>
        

        
    </form>
    </div>
  )
}

export default Form