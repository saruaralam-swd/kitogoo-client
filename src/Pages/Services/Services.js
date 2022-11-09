import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Service from './Service';

const Services = () => {
  const allServices = useLoaderData();
  const { allService } = allServices;

  useTitle('Services')

  return (
    <div>
      <h3>a{ }</h3>

      <div>
        {
          allService.map(ser => <Service key={ser._id} service={ser}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;