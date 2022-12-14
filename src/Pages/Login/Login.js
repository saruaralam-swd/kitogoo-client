import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { setAuthToken } from '../../Api/Auth';
import google from '../../assets/google.webp'
import toast from 'react-hot-toast';

const Login = () => {
  useTitle('Login')
  const { login, providerLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();

  // email & password 
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(result => {
        const user = result.user;
        setAuthToken(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message)
      })
  };

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
        toast.error(error.message)
      })
  };

  return (
    <div className='flex justify-center my-10'>
      <div className='space-y-3'>
        <h2 className='text-3xl font-semibold'>Login In</h2>
        <form onSubmit={handleLogIn} className='space-y-3'>
          <input className='border-2 border-indigo-500 focus:outline-2 focus:outline-indigo-700  rounded-md px-4 py-1' type="email" name="email" placeholder='example@gmail.com' required /> <br />
          <input className='border-2 border-indigo-500 focus:outline-2 focus:outline-indigo-700  rounded-md px-4 py-1' type="password" name="password" placeholder='password' required /> <br />
          <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white'>Login</button>
        </form>
        <p> haven't any account? <Link to='/signup' className='text-blue-700 font-semibold'>Sign Up</Link>
          <div className=' divider'>or</div>
          <button onClick={handleGoogleLogIn} className='px-4 py-1 font-semibold  duration-500 border w-full rounded-full hover:border-indigo-500 flex items-center gap-2' >
            {/* <FaGoogle className=' inline-block' />   */}
            <img src={google} className='w-8' alt="" />
            sign in with Google
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;