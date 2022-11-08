import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <h2 className='text-3xl text-center font-semibold'>loading...</h2>
  }

  if (!user?.uid) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }

  return children;
};

export default PrivateRoute;