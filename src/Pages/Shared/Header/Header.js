import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import logo from '../../../assets/logo2.png';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem('kitogoo-token');
        alert('log out success')
      })
      .catch(error => {
        alert(error.message);
      })
  }

  return (
    <header className='border-b-2 sticky top-0 z-40'>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            {/* small device */}
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-300 rounded-md w-40">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/allServices'>services</Link></li>
              <li><Link to='/blog'>Blog</Link></li>

              <li tabIndex={0}>
                <Link className="justify-between">
                  <div className="avatar online ">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} alt='' />
                    </div>
                  </div>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </Link>

                <ul className="p-2 bg-gray-400">
                  <li className=''><Link to='/myReview'>My Reviews</Link></li>
                  <li htmlFor="my-modal" className=''><Link to='/addServices'>Add Service</Link></li>
                </ul>
              </li>

            </ul>
            {/* small device bar3 */}

          </div>
          <Link to='/'><img src={logo} className='lg:w-2/5 md:w-2/5 w-2/3' alt="" /></Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allServices'>services</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          {
            user?.uid ?
              <>
                <ul className="menu menu-horizontal p-0">
                  <p>{user?.displayName}</p>
                  <li tabIndex={0} className='hidden md:block'>

                    <Link className=''>
                      <div className="avatar online ">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={user?.photoURL} alt='' />
                        </div>
                      </div>
                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </Link>

                    <ul className="p-2 bg-gray-300">
                      <li className=' hidden md:block'><Link to='/myReview'>My Reviews</Link></li>
                      <li htmlFor="my-modal" className=' hidden md:block'><Link to='/addServices'>Add Service</Link></li>
                    </ul>
                  </li>
                </ul>
                <Link onClick={handleLogOut} className="bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white">Log Out</Link>
              </>
              :
              <Link to='/login' className="bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white">Login</Link>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;