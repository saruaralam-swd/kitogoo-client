import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
  const { _id, img, title, price, description } = service;

  return (
    <div className='border rounded-md hover:ring-1 ring-indigo-500 shadow-lg relative'>
      <div className='bg-white flex justify-center items-center rounded-t-2xl'>
        <PhotoProvider>
          <PhotoView src={img}> 
            <img src={img} className='h-[250px]  rounded-t-2xl cursor-pointer' alt="" />
          </PhotoView>
        </PhotoProvider>
      </div>

      <div className='p-3 space-y-2'>
        <div className='flex justify-between items-center space-y-2'>
          <h2 className='text-lg font-bold '>{title}</h2>
          <p className='font-bold'> ${price}</p>
        </div>

        <p className='pb-10'>{description.length > 100 ? (description.slice(0, 100) + '...') : description}</p>

        <Link to={`/services/${_id}`} className=' block absolute bottom-2 right-2'>
          <button className='border text-indigo-600 hover:bg-indigo-200 font-semibold px-2 py-1 rounded-md'>Sign Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;