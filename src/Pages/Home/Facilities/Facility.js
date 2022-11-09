import React from 'react';

const Facility = ({ facility }) => {
  const { img, title, description } = facility;

  return (
    <div className='flex gap-4 items-start'>
      <img src={img} className='w-11' alt="" />
      <div>
        <h2 className='font-semibold text-xl text-indigo-500 hover:underline'>{title}</h2>
        <p className=' text-gray-500 '>{description}</p>
      </div>
    </div>
  );
};

export default Facility;