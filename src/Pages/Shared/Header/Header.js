import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert('log out success')
      })
      .catch(error => {
        alert(error.message);
      })
  }

  return (
    <div className='border-b-2'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            {/* small device */}
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link>Home</Link></li>
              <li tabIndex={0}>
                <Link className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </Link>
                <ul className="p-2">
                  <li><Link>Submenu 1</Link></li>
                  <li><Link>Submenu 2</Link></li>
                </ul>
              </li>
              <li><Link>Item 3</Link></li>
            </ul>

          </div>
          <Link className="btn btn-ghost normal-case text-xl">Kitogoo</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/'>Home</Link></li>

            {/* <li tabIndex={0}>
              <Link>
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </Link>
              <ul className="p-2">
                <li><Link>Submenu 1</Link></li>
                <li><Link>Submenu 2</Link></li>
              </ul>
            </li> */}

            <li><Link to='/allServices'>services</Link></li>
            <li><Link to='/blog'>Blog</Link></li>

          </ul>
        </div>

        <div className="navbar-end">
          {
            user?.uid ?
              <>
                <p className='mr-3'>{user?.displayName}</p>
                <div className='menu menu-horizontal p-0'>
                  <li><Link to='/myReview'>My Reviews</Link></li>
                  <li><Link to='/'>Add Service</Link></li>


                </div>
                <Link onClick={handleLogOut} className="bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white">Log Out</Link>
              </>
              :
              <Link to='/login' className="bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;