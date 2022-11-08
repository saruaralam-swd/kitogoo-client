import React, { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddServices = () => {
  const {user} = useState(AuthContext);

  const handleAddServices = () => {

  };

  return (
    <div className='my-10 w-3/5 mx-auto'>
      <form onSubmit={handleAddServices} className=' space-y-5'>
        <div className='grid md:grid-cols-2 gap-5'>
          <input type="text" name='firstName' placeholder="First Name" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" />
          <input type="text" name='lastName' placeholder="Last Name" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" />
          <input type="text" name='phone' placeholder="Your Phone" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" required />
          <input type="email" name='email' placeholder="Your Email" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" defaultValue={user?.email} readOnly />
        </div>

        <textarea name='message' className=" placeholder:italic border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1 w-full" placeholder="Your Message" required />

        <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Add</button>
      </form>
    </div>
  );
};

export default AddServices;