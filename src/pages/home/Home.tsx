import Messager from 'components/messager/Messager';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='flex'>
      <div className='w-[380px] py-8 h-screen overflow-auto hidden md:block'>
        <Outlet />
      </div>
      <div className='flex-grow bg-secondary-light dark:bg-secondary-dark'>
        <Messager />
      </div>
    </div>
  );
};

export default HomePage;
