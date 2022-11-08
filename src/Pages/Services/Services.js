import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
  const allServices = useLoaderData();
  const { allService } = allServices;

  return (
    <div>
      <h3>{ }</h3>

      <div>
        {
          allService.map(ser => <Service key={ser._id} service={ser}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;