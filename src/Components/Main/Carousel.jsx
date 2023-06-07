import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';



const Carousel = () => {

    const [shows , setShows] = useState([])

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
          .then((response) => response.json())
          .then((data) => {
            setShows(data);
          })
          .catch((error) => {
            console.error("Error", error);
          });
      }, []);

  const options = {perPage: 1, arrows: false, pagination: true, width:340, rewind: false , type:'loop' , autoplay:true}

  return (
    <div className='w-full flex md:flex-row flex-col my-8 items-center justify-center gap-12 font-semibold'>
        
        <div className='w-[60%] flex flex-col  leading-10'>
            <h1 className='md:text-8xl tracking-wide text-6xl text-[#7367EF]'>Embark on an Epic ShowQuest!
            </h1>

        </div>

        <div className='flex items-center justify-start rounded-xl shadow-2xl shadow-[#7367EF] my-10'>  
            <Splide options={options} aria-label="My Favorite Images" className=''>

                {shows.map(({ show }) => (
                    <SplideSlide key={shows.id} >
                        <img src={show.image.medium} alt={show.name} className='h-[480px] w-[340px] rounded-2xl cursor-grab'/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>

    </div>
  )
}

export default Carousel