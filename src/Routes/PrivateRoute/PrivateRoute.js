import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <>
      <div className='h-[500px] flex items-center justify-center'>
        <button className="btn btn-lg text- btn-outline border-none text-indigo-600 loading lowercase">loading...</button>
      </div>
    </>
  }

  if (!user?.uid) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }

  return children;
};

export default PrivateRoute;