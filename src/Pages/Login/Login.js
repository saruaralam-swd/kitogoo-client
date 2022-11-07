import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className=' flex justify-center my-10'>
      <div className='space-y-3'>
        <h2 className='text-3xl font-semibold'>Login In</h2>
        <form onSubmit={handleLogIn} className='space-y-3'>
          <input className='border-2 border-indigo-500 focus:outline-2 focus:outline-indigo-700  rounded-md px-4 py-1' type="email" name="email" placeholder='example@gmail.com' required /> <br />
          <input className='border-2 border-indigo-500 focus:outline-2 focus:outline-indigo-700  rounded-md px-4 py-1' type="password" name="password" placeholder='password' required /> <br />
          <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white'>Login</button>
        </form>
        <p> haven't any account? <Link to='/signup' className='text-blue-700 font-semibold'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;