import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { img, title, price, description, _id } = service;
  return (
    <div className='border rounded-t-2xl '>
      <div className='bg-white flex justify-center items-center rounded-t-2xl'>
        <img src={img} className='h-[250px] rounded-t-2xl' alt="" />
      </div>

      <div className='p-2 space-y-2'>
        <div className='flex justify-between items-center space-y-2'>
          <h2 className='text-2xl font-semibold '>{title}</h2>
          <p className='font-bold'> ${price}</p>
        </div>

        <p>{description.length > 100 ? (description.slice(0, 100) + '...') : description}</p>
        <Link to={`/services/${_id}`} className='inline-block'>
          <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white'>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;