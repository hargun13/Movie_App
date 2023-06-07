import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Background from './profile_image_short.jpg'

const RightBar = () => {
  return (
    <div className=' md:w-[6%] hidden w-[0%] md:flex md:flex-col items-center justify-center md:h-screen bg-[#16171b]'>

        <div>   

            <ul>
                <li className=' flex items-center justify-center h-11 w-11 rounded-full text-center text-2xl bg-red-600 text-white font-thin my-10 transition duration-300 hover:-translate-y-2 cursor-pointer'>
                    <AiOutlinePlus />
                </li>

                <li className=' flex items-center justify-center h-11 w-11 rounded-full text-center text-2xl border-[1px] border-black my-10 transition duration-300 hover:-translate-y-2 cursor-pointer' 
                style={{backgroundImage:`url(${Background})` , backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>
                    <div className='h-2 w-2 relative bg-[#2CC872] right-0 left-[30%] top-[-40%] rounded-full border-[1px] border-black'></div>
                </li>

                <li className=' flex items-center justify-center h-11 w-11 rounded-full text-center text-2xl border-[1px] border-black my-10 transition duration-300 hover:-translate-y-2 cursor-pointer' 
                style={{backgroundImage:`url(${Background})` , backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>

                </li>

                <li className=' flex items-center justify-center h-11 w-11 rounded-full text-center text-2xl border-[1px] border-black  my-10 transition duration-300 hover:-translate-y-2 cursor-pointer' 
                style={{backgroundImage:`url(${Background})` , backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>
                    <div className='h-2 w-2 relative bg-[#2CC872] right-0 left-[30%] top-[-40%] rounded-full border-[1px] border-black'></div>
                </li>

                <li className=' flex items-center justify-center h-11 w-11 rounded-full text-center text-2xl border-[1px] border-black  my-10 transition duration-300 hover:-translate-y-2 cursor-pointer' 
                style={{backgroundImage:`url(${Background})` , backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>
                    <div className='h-2 w-2 relative bg-[#2CC872] right-0 left-[30%] top-[-40%] rounded-full border-[1px] border-black'></div>
                </li>

                <li className=' flex items-center justify-center h-11 w-11 rounded-full text-center text-2xl border-[1px] border-black my-10 transition duration-300 hover:-translate-y-2 cursor-pointer' 
                style={{backgroundImage:`url(${Background})` , backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>

                </li>

            </ul>

        </div>
        
    </div>
  )
}

export default RightBar