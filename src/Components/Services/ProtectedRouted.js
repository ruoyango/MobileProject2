import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './Authentication'; // Import your authentication service

const ProtectedRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;