import React from 'react';

const Facility = ({ facility }) => {
  const { img, title, description } = facility;

  return (
    <div className='flex gap-4 items-start'>
      <img src={img} alt="" />
      <div>
        <h2 className='font-semibold text-xl text-[#12700d] md:text-center'>{title}</h2>
        <p className=' text-gray-500 md:text-center'>{description}</p>
      </div>
    </div>
  );
};

export default Facility;