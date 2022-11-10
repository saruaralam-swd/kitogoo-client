import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const EditReview = () => {
  const { message, _id, } = useLoaderData();
  useTitle('Edit Review')

  const handleEditReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.description.value;
    console.log(message);

    fetch(`https://kitogoo-server.vercel.app/review/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({message})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('new review successfully updated');
        }
      })
  }

  return (
    <div className='my-10 md:w-3/5 px-5 md:px-0 mx-auto'>
      <h2 className='md:text-center font-semibold text-2xl md:text-3xl mb-5'>Update Your Review</h2>
      <form onSubmit={handleEditReview} className='space-y-5'>
        <div className='grid gap-5'>
          <textarea name='description' placeholder="Your Message" defaultValue={message} className="placeholder:italic border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1 w-full" required />
        </div>
        <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Update</button>
      </form>
    </div>
  );
};

export default EditReview;