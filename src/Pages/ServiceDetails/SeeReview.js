import React from 'react';

const SeeReview = ({ review }) => {
  const { email, message, photo, serviceName, userName } = review;

  return (
    <div>
      <div className='flex gap-5 border'>
        <img src={photo} title={userName} className='w-[50px] h-[50px] rounded-full' alt="" />
        
        <div>
          <h2>{userName}</h2>
          <p>data: coming</p>
          <p>m{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SeeReview;