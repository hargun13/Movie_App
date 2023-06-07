import React from 'react'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiMessageSquareDots} from 'react-icons/bi'
import {TfiArrowCircleRight , TfiArrowCircleLeft} from 'react-icons/tfi'
import profile from '../main_profile_short.jpg'

const Navbar = () => {
  return (
    <div className='hidden md:flex items-center justify-between'>

        <div className='w-[50%] flex items-center justify-start'>

            <TfiArrowCircleLeft size={32} className='mx-3'/>
            <TfiArrowCircleRight size={32} className='mx-3'/> 

            <form className='w-[60%] mx-3' >   
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>

                    </div>

                    <input type="search" id="default-search" 
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-transparent focus:outline-none " placeholder="Search..." required />

                
                </div>
            </form>
        </div>

        <div className='flex mx-10 w-[50%] items-center justify-end'>
            <IoIosNotificationsOutline size={25} className='mx-3'/>
            <BiMessageSquareDots size={25} className='mx-3'/>

            <div className='h-8 w-8 rounded-full mx-3 border-[1px] border-[#7367EF]' 
            style={{backgroundImage:`url(${profile})` , backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>

            </div>
        </div>
        
    </div>
  )
}

export default Navbar