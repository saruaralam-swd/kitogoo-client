import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, img, title, price, description } = service;

  return (
    <div className='border'>
      <h2>{title}</h2>
      <img className='w-[200px]' src={img} alt="" />
      <Link to={`/services/${_id}`} className='inline-block'>
        <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white'>Details</button>
      </Link>
    </div>
  );
};

export default Service;