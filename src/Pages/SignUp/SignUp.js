import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../Api/Auth';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
  useTitle('SignUp')
  const { createUser, profileUpdate, logOut, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoURL.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        handleProfileUpdate(name, photo);
        form.reset();
        navigate('/login')
        logOut()
        alert('account create success. please login')
      })
      .catch(error => {
        alert(error.message);
      })
  };

  const handleProfileUpdate = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    profileUpdate(profile)
      .then(() => { })
      .catch(error => {
        alert(error.message);
      })
  }

  // provider
  const handleGoogleLogIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        setAuthToken(user);
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
        alert(error.message)
      })
  };

  return (
    <div className=' flex justify-center my-10'>
      <div className='space-y-3'>
        <h2 className='text-3xl font-semibold'>Sign Up</h2>
        <form onSubmit={handleCreateUser} className='space-y-3'>
          <input className='border-2 border-indigo-600 rounded-md px-4 py-1' type="text" name="name" placeholder='full Name' required /> <br />
          <input className='border-2 border-indigo-600 rounded-md px-4 py-1' type="text" name="photoURL" placeholder='photo url' required /> <br />
          <input className='border-2 border-indigo-600 rounded-md px-4 py-1' type="email" name="email" placeholder='example@gmail.com' required /> <br />
          <input className='border-2 border-indigo-600 rounded-md px-4 py-1' type="password" name="password" placeholder='password' required />  <br />
          <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Sign Up</button>
        </form>
        <p> Already have account? <Link to='/login' className='text-blue-700 font-semibold'>Log in</Link></p>
        <button onClick={handleGoogleLogIn} className='hover:bg-indigo-600 hover:text-white  px-4 py-1 font-semibold  duration-500 border w-full rounded-2xl flex items-center gap-2' ><FaGoogle className=' inline-block' />  sign in with Google</button>
      </div>
    </div>
  );
};

export default SignUp;