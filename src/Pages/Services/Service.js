import React from 'react';

const Service = ({ service }) => {
  const { img, title, price, description } = service;

  return (
    <div className='border'> 
      <img className='w-[200px]' src={img} alt="" />
    </div>
  );
};

export default Service;