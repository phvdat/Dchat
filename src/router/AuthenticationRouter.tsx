import { RoutePath } from 'constants/routes';
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthenticationRouter = () => {
  const [authentication] = useState(false);
  if (!authentication) {
    return <Navigate to={RoutePath.Login} replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthenticationRouter;
