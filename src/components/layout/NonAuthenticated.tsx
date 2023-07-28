import { auth } from 'config/firebase';
import { RoutePath } from 'constants/routes';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

const NonAuthenticated = ({ children }: { children?: React.ReactNode }) => {
  const [user] = useAuthState(auth);
  return <>{user ? <Navigate to={RoutePath.Chat} replace /> : children}</>;
};

export default NonAuthenticated;
