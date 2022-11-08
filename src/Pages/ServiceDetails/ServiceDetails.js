import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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

    const time = new Date().getTime();

    const reviewDate = {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };

    const createReview = {
      photo: user?.photoURL,
      userName: user?.displayName,
      email: user?.email,
      serviceId: _id,
      serviceName: title,
      message,
      time,
      reviewDate
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
          const newReview = [createReview, ...review];
          // const result = newReview.sort((a, b) => b.time - a.time);
          form.reset();
          setReview(newReview);
        }
      })
  };

  useEffect(() => {
    fetch(`http://localhost:5000/review?id=${_id}`)
      .then(res => res.json())
      .then(data => {
        const result = data.sort((a, b) => b.time - a.time);
        setReview(result)
      })
  }, [_id]);

  return (
    <div>
      <div className='border'>
        <h2 className='text-2xl font-semibold '>{title}</h2>
        <p>here will display service details about {title} service</p>
      </div>

      <div className='my-10 w-3/5 mx-auto'>
        {
          user?.uid ?
            <>
              <form onSubmit={handleCreateReview}>
                <h2 >Write Your review</h2>
                <textarea name='message' className=" placeholder:italic border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1 w-full" placeholder="Your Message" required />

                <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Send</button>
              </form>
            </>
            :
            <></>
        }
      </div>

      <div className='border my-10 w-4/5 mx-auto'>
        <h2 className='text-3xl font-semibold'>Reviews</h2>
        {
          user?.uid ?
            <>
              <p>{review.length} review found about this service</p>
              <div>
                {
                  review.map(rew => <SeeReview key={rew._id} review={rew}></SeeReview>)
                }
              </div>
            </>
            :
            <>
              <h2>Please <Link to='/login' className='text-indigo-600'>login</Link> to add a review</h2>
            </>
        }
      </div>
    </div>
  );
};

export default ServiceDetails;