import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SeeReview from './SeeReview';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, _id } = service;

  const [review, setReview] = useState([]);

  // create review
  const handleCreateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;

    const createReview = {
      photo: user?.photoURL,
      userName: user?.displayName,
      email: user?.email,
      serviceId: _id,
      serviceName: title,
      message,
    };

    fetch('http://localhost:5000/addReview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(createReview)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          const newReview = [...review, createReview];
          setReview(newReview);
          form.reset();
          alert('Thanks for your feedback')
        }
      })
  };

  useEffect(() => {
    fetch(`http://localhost:5000/review?id=${_id}`)
      .then(res => res.json())
      .then(data => {
        setReview(data)
      })
  }, [_id]);

  return (
    <div>
      <div className='border'>
        <h2 className='text-2xl font-semibold '>{title}</h2>
        <p>here will display service details about {title} service</p>
      </div>

      <div className='my-10 w-3/5 mx-auto'>
        <form onSubmit={handleCreateReview}>
          <h2 >Write Your review</h2>
          <textarea name='message' className=" placeholder:italic border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1 w-full" placeholder="Your Message" required />

          <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Send</button>
        </form>
      </div>

      <div className='border my-10 w-4/5 mx-auto'>
        <h2 className='text-3xl font-semibold'>Reviews</h2>
        <p>{review.length} review found about this service</p>
        <div>
          {
            review.map(rew => <SeeReview key={rew._id} review={rew}></SeeReview>)
          }
        </div>
      </div>
    </div>
  );
};



export default ServiceDetails;
