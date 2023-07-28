import Sidebar from 'components/sidebar/Sidebar';
import { auth } from 'config/firebase';
import { RoutePath } from 'constants/routes';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';

const DefaultLayout = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate(RoutePath.Login);
    }
  }, [user]);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='min-h-screen w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
