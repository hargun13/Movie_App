import React from 'react'
import Typical from 'react-typical'
import {TbBrandSafari} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {IoIosPeople } from 'react-icons/io'
import {BsPerson} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {LuLogOut} from 'react-icons/lu'   

const Sidebar = () => {
  return (
    <div className='md:border-r-[#4f505a] md:border-r-[1px] md:w-[17%] hidden md:h-screen md:flex md:flex-col p-6 '>
        
        
        <Typical
            loop = {Infinity}
            wrapper='b'
            steps ={[
                'ShowQuest',
                20000,   
                'Uncover', 
                3000,
                'Discover',
                3000,
            ]}
            className='font-bold text-2xl text-white' 
        />

        {/* Menu */}
        <div className='py-4'>
            <h1 className='text-xs py-2'>Menu</h1>
            <ul>
                <li className='transition duration-200 hover:text-[#7367EF] flex items-center text-[15px] font-semibold my-3 cursor-pointer'>

                    <TbBrandSafari className='mr-3'/>Browse

                </li>

                <li className='transition duration-200 hover:text-[#7367EF] flex items-center text-[15px] font-semibold my-3 cursor-pointer'>
                    
                    <AiOutlineHeart className='mr-3' /> Watchlist
                
                </li>
                
                <li className='transition duration-200 hover:text-[#7367EF] flex items-center text-[15px] font-semibold my-3 cursor-pointer'>
                    
                    <FaRegCalendarAlt className='mr-3' />Coming Soon
                
                </li>
            </ul>
        </div>

        {/* Social */}
        <div className='py-4'>
            <h1 className='text-xs py-2'>Social</h1>
            <ul>
                
                <li className='transition duration-200 hover:text-[#7367EF] flex items-center text-[15px] font-semibold my-3 cursor-pointer'>
                    
                    <BsPerson className='mr-3'/> Friends
                
                </li>
                
                <li className='transition duration-200 hover:text-[#7367EF] flex items-center text-[15px] font-semibold my-3 cursor-pointer'>
                
                    <IoIosPeople className='mr-3'/> Parties
                
                </li>

            </ul>
        </div>

        {/* General */}
        <div className='py-4'>
            <h1 className='text-xs py-2'>General</h1>
            <ul>
                
                <li className='transition duration-200 hover:text-[#7367EF] flex items-center text-[15px] font-semibold my-3 cursor-pointer'>
                    
                    <FiSettings className='mr-3'/> Settings
                    
                </li>
                
                <li className='transition duration-200 hover:text-[#7367EF] flex items-center text-[15px] font-semibold my-3 cursor-pointer'>
                    
                    <LuLogOut className='mr-3'/> Log out
                
                </li>

            </ul>
        </div>
    
    </div>
  )
}

export default Sidebar