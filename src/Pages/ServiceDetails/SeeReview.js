import React from 'react';

const SeeReview = ({review}) => {
  console.log(review);
  const {message} = review;

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default SeeReview;