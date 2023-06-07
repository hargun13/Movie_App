import React, { useState, useEffect, useParams } from 'react';
import Sum_Navbar from './Sum_Navbar';
import Booking from './Booking';


//Data wasn't being passed from RestMovies <- Need to fix it, the array of data passed was null



const Summary = () => {
//   const [show, setShow] = useState(null);


//   useEffect(() => {
    
//       fetch(`https://api.tvmaze.com/search/shows?q=all`)
//         .then((response) => response.json())
//         .then((data) => {
//           setShow(data);
//         });
    
//   }, []);

    const image = "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"

  return (
    <div className='bg-[#212329] h-screen w-screen'>
      {/* {show && (
        <h1 className='text-black text-5xl'>{show.name}</h1>
      )}
      {!show && (
        <h1 className='text-black text-5xl'>No show found</h1>
      )} */}


      <Sum_Navbar />

      <div className='p-5 md:flex  m-5 gap-28 text-white '>
        
        <div className='md:w-[30%] w-full h-full my-10 md:my-0'>
            <img src={image} alt="" className='h-[480px] w-[340px] shadow-2xl shadow-[#7367EF] rounded-2xl'/>
        </div>

        <div className='md:w-[70%] w-full h-full'>
            <h1 className='text-7xl '>All American</h1>
            
            <p className='text-md my-2'>English &nbsp; | &nbsp; Drama  &nbsp;|&nbsp;  Sports  &nbsp;|&nbsp;  60min/Ep  &nbsp;|&nbsp;  Premiered: 2018-10-10</p>

            <p className='text-xl md:my-11'>When a rising high school football player from South Central L.A. is recruited to play for Beverly Hills High, the wins, losses and struggles of two families from vastly different worlds — Compton and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger.</p>

            <p className='text-md my-4'>Rating: 6.2</p>
            <p className='text-md my-4'>Network: The CW</p>
            <p className='text-md my-4'>The CW: <a href='https://www.cwtv.com/'>https://www.cwtv.com/</a></p>
            <p className='text-md my-4'>Country: USA</p>
        </div>

      </div>
      


    </div>
  );
};

export default Summary;














// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Summary = ({show}) => {
//   const location = useLocation();
//   const show = location.state ? location.state.show : null;

//   return (
//     <div>
//       <div>
//         {show ? (
//           <h1 className='text-black text-5xl'>{show.name}</h1>
//         ) : (
//           <h1 className='text-black text-5xl'>No show found</h1>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Summary;