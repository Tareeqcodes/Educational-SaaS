import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../app/context/Authcontext';
import Spinner from '../Spinner';

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />// Optional: Add a loading spinner here
  }

  return user ? <Outlet /> : <Navigate to="/Auth" />;
};

export default PrivateRoute;