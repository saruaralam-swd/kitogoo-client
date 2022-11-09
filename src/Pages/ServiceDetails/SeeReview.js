import React from 'react';
import { Link } from 'react-router-dom';

const SeeReview = ({ review }) => {
  const { message, photo, userName, reviewDate, time } = review;

  return (
    <div className='my-5'>
      <div className='flex items-center gap-2 mb-2'>
        <img src={photo} title={userName} className='w-8 h-8 rounded-full' alt="" />
        <h2>{userName}</h2>
      </div>

      <div>
        <div className="rating  rating-sm">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
        </div>
        <p className="text-gray-500 text-md">Reviewed in the Bangladesh on {Date(time).slice(4, 25)}</p>
        <Link className='text-orange-600 text-sm hover:underline inline-block'>Verified Purchase</Link>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SeeReview;