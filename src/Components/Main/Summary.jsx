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
import React, { useState, useEffect, useParams } from 'react';

const Summary = () => {
//   const [show, setShow] = useState(null);


//   useEffect(() => {
    
//       fetch(`https://api.tvmaze.com/search/shows?q=all`)
//         .then((response) => response.json())
//         .then((data) => {
//           setShow(data);
//         });
    
//   }, []);

  return (
    <div>
      {/* {show && (
        <h1 className='text-black text-5xl'>{show.name}</h1>
      )}
      {!show && (
        <h1 className='text-black text-5xl'>No show found</h1>
      )} */}



      hello 
    </div>
  );
};

export default Summary;