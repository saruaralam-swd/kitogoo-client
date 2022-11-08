import React from 'react';

const SeeReview = ({ review }) => {
  const { email, message, photo, serviceName, userName } = review;

  return (
    <div>
      <div className='flex gap-5 border'>
        <img src={photo} title={userName} className='w-[50px] h-[50px] rounded-full' alt="" />

        <div>
          <h2>{userName}</h2>
          
          <div className="rating  rating-xs">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
          
          <p>data: coming</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SeeReview;