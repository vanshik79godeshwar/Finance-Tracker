import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  const { username } = useParams();

  return token ? React.cloneElement(element, { username }) : <Navigate to="/login" />;
};

export default PrivateRoute;
