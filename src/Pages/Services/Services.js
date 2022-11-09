import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Service from './Service';

const Services = () => {
  useTitle('Services')
  const allServices = useLoaderData();
  const { allService } = allServices;

  return (
    <div>
      <div>
        {
          allService.map(ser => <Service key={ser._id} service={ser}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;