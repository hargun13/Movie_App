import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import RestMovies from './RestMovies'

const Main = () => {
  return (
    <div className='md:w-[77%] w-screen p-7 overflow-y-scroll scrollbar-hide'>
        
        <h1 className='text-5xl text-white text-center md:hidden'>ShowQuest</h1>
            
            <Navbar />

            <Carousel />

            <RestMovies />

    </div>
  )
}

export default Main