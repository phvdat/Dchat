import Icon from 'components/baseUI/Icon';
import { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeLocal = localStorage.getItem('color-theme');

  const handleSwitchMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      setDarkMode(true);
    }
  };

  useLayoutEffect(() => {
    if (darkModeLocal && darkModeLocal === 'light') {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, [darkModeLocal]);

  return (
    <div className='w-fit flex flex-col justify-between items-center py-6 bg-tertiary-light dark:bg-tertiary-dark'>
      <NavLink to='#' className='px-1'>
        <h1 className='font-bold'>CHATD</h1>
      </NavLink>
      <div className='flex flex-col gap-1'>
        <NavLink to='/' className='py-2  px-4 rounded-md'>
          <Icon icon='user-solid' size={20} />
        </NavLink>
        <NavLink to='#' className='py-2  px-4'>
          <Icon icon='message' size={20} />
        </NavLink>
        <NavLink to='#' className='py-2  px-4'>
          <Icon icon='user-group-solid' size={20} />
        </NavLink>
        <NavLink to='#' className='py-2  px-4'>
          <Icon icon='setting' size={20} />
        </NavLink>
      </div>
      <div className='flex flex-col gap-3 py-2 w-full'>
        <div className='w-full text-center py-2'>
          <Icon icon='globe-solid' size={20} className='cursor-pointer' />
        </div>
        <div onClick={handleSwitchMode} className='w-full text-center py-2'>
          <Icon
            icon={darkMode ? 'moon-solid' : 'sun'}
            size={20}
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
