import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './LimitService';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => {
        const { serviceLimit } = data;
        setServices(serviceLimit);
      })
  }, []);

  return (
    <div className='w-4/5 mx-auto my-20 space-y-5'>
      <h2 className='text-3xl font-semibold underline'>Services</h2>

      <div className='grid md:grid-cols-3 gap-5'>
        {
          services.map(ser => <Service key={ser._id} service={ser}></Service>)
        }
      </div>
      
      <div className='mx-auto text-center'>
        <Link to='/allServices'><button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white'>see all</button></Link>
      </div>
    </div>
  );
};

export default Services;