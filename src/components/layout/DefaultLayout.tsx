import Sidebar from 'components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
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
