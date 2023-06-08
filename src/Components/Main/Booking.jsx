import React from 'react'
import Sum_Navbar from './Sum_Navbar'

const Booking = () => {
  const image = "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"
  return (
    <div className='bg-[#212329] h-screen w-screen'>

      <Sum_Navbar />

      <div className='p-5 md:flex  m-5 gap-28 text-white '>
        
        <div className='md:w-[30%] w-full h-full my-10 md:my-0'>
            <img src={image} alt="" className='h-[480px] w-[340px] shadow-2xl shadow-[#7367EF] rounded-2xl'/>
        </div>

        <div className='md:w-[70%] w-full h-full'>
            <h1 className='text-7xl '>All American</h1>
            
            <form className='my-10 text-3xl '>
              <label htmlFor='tick'>Number of tickets: </label>
              <input type="number" name="tick" id="tick"  className='text-black'/><br/><br/><br/>

              <label htmlFor="Date">Pick a Date and Time: </label>
              <input type='date' name="Date" id="Date" className='text-black'/><br/><br/><br/>

              <h1>Please click on the Book Now button to confirm your booking!!</h1>

            </form>
        </div>

      </div>
      


    </div>
  )
}

export default Booking