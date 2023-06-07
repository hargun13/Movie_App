import React from 'react'
import Sidebar from './Components/Sidebar';
import RightBar from './Components/RightBar';
import Main from './Components/Main/Main';

const Home = () => {
  return (
    <div className="bg-[#2d3038] h-screen w-screen text-[#8c8d9b] flex">


      <Sidebar />

      <Main />
      
      <RightBar />
    
    
    </div>
  )
}

export default Home