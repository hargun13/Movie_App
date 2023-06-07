import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RestMovies = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();
  // const showsRef = useRef([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  const handleNavigation = (show) => {
    navigate('/summary', { state: { show } });
  };

  return (
    <div className='my-16'>
      <h1 className='text-center text-6xl my-10'>Explore</h1>
      <hr className='text-[#7367EF] bg-[#7367EF]' />

      <div className='grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center'>
        {shows.map(({show}) => (
          <div key={show.id} className='flex items-center justify-center my-10 rounded-xl'>
            <Link to='/summary' onClick={() => handleNavigation(show)}>
              <img
                src={show.image.medium}
                alt={show.name}
                className='h-[360px] w-[240px] rounded-2xl shadow-2xl shadow-[#9f97f3] transition duration-200 hover:-translate-y-2'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestMovies;