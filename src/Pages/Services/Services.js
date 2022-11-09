import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Service from './Service';

const Services = () => {
  useTitle('Services')
  const allServices = useLoaderData();
  const { allService } = allServices;

  return (
    <div className='md:w-4/5 px-5 md:px-0  mx-auto my-20 space-y-5'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          allService.map(ser => <Service key={ser._id} service={ser}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;