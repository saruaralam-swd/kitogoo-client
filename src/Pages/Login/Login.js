import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa'
import useTitle from '../../hooks/useTitle';

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

        const currentUser = {
          email: user?.email
        }

        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem('kitogoo-token', data.token)
          })

        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        alert(error.message)
      })
  };

  // provider
  const handleGoogleLogIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      })
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
          <div className=' divider'>or</div>
          <button onClick={handleGoogleLogIn} className='hover:bg-indigo-600 hover:text-white  px-4 py-1 font-semibold  duration-500 border w-full rounded-2xl flex items-center gap-2' ><FaGoogle className=' inline-block' />  sign in with Google</button>
        </p>
      </div>
    </div>
  );
};

export default Login;