import React,{useState} from 'react';
import {AiOutlineClose , AiOutlineMenu , AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Sum_Navbar() {

    const [nav,setNav] = useState(false);

    const handleNav =()=>{
        setNav(!nav);
    };


  return (
    <div className='text-[#7367EF] bg-transparent flex justify-between mx-auto px-5 p-3 h-20  items-center '>

        <a href='/' className='text-4xl '>ShowQuest</a>
        <ul className='hidden md:flex mx-5'>
            <Link to="/book"><li className='p-1 px-3 text-3xl transtion duration-300  hover:rounded-xl cursor-pointer  group'>
                <span className='group-hover:text-[#f89ecc] flex items-center justify-center gap-2' >
                    
                    Book Now <AiOutlineArrowRight className='transition duration-300 group-hover:translate-x-3' />
                
                </span>
            </li></Link>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu className='cursor-pointer' size={30} /> : <AiOutlineClose className='cursor-pointer' size={30}/> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-neutral-900 p-4 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-neutral-900 p-4'}>
            
            <h1>ShowQuest</h1>
            <ul className='pt-10 uppercase'>
    
                <li className='p-1 px-3  text-2xl hover:bg-[#FAD3E7] hover:rounded-full cursor-pointer'>About</li>

            </ul>
        
        </div>

    </div>
  );
};

export default Sum_Navbar