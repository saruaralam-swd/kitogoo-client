import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {


  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className=' flex justify-center my-10'>
      <div className='space-y-3'>
        <h2 className='text-3xl font-semibold'>Sign Up</h2>
        <form onSubmit={handleCreateUser} className='space-y-3'>
          <input className='border-2 border-indigo-600 rounded-md px-4 py-1' type="text" name="name" placeholder='Your Name' required /> <br />
          <input className='border-2 border-indigo-600 rounded-md px-4 py-1' type="email" name="email" placeholder='example@gmail.com' required /> <br />
          <input className='border-2 border-indigo-600 rounded-md px-4 py-1' type="password" name="password" placeholder='password' required />  <br />
          <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Sign Up</button>
        </form>
        <p> Already have account? <Link to='/login' className='text-blue-700 font-semibold'>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;