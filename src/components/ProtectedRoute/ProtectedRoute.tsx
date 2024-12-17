import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const formData = useSelector((state: any) => state.form);

  const isLoggedIn = formData.email !== '' && formData.password !== '';

  return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
