import React, { useEffect, useState } from 'react';
import Facility from './Facility';

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/facilities')
      .then(res => res.json())
      .then(data => setFacilities(data))
  }, [])

  return (
    <div className='w-4/5 mx-auto'>
      <h2 className='text-3xl font-semibold text-center mb-2 underline'>Facilities</h2>
      <div className='grid md:grid-cols-3 gap-3'>
        {
          facilities.map(facility => <Facility key={facility._id} facility={facility}></Facility>)
        }
      </div>
    </div>
  );
};

export default Facilities;