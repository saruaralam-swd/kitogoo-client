import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
  useTitle('Add Services')
  const handleAddServices = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const img = form.photoURL.value;
    const price = form.price.value;
    const description = form.description.value;

    const createService = {
      title,
      img,
      price,
      description,
      date: new Date().getTime()
    };
    
    fetch('http://localhost:5000/service', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(createService)
    })
    .then(res => res.json())
    .then(data => {
      if (data.acknowledged) {
        toast.success('service added')
        form.reset();
      }
    })
  };

  return (
    <div className='my-10 md:w-3/5 px-5 md:px-0 mx-auto'>
      <h2 className='md:text-center font-semibold text-2xl md:text-3xl mb-5'>Add your preferred service</h2>
    
      <form onSubmit={handleAddServices} className='space-y-5'>
        <div className='grid gap-5'>
          <input type="text" name='title' placeholder="Service Name" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" required />
          <input type="text" name="photoURL" placeholder="service img" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" required />
          <input type="number" name='price' placeholder="Service price" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" required />
        </div>

        <textarea name='description' placeholder="Write your message about this" className="placeholder:italic border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1 w-full" required />

        <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Create New Service</button>
      </form>
    </div>
  );
};

export default AddServices;