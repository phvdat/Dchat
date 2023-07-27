// import Logo from 'src/assets/imgs/avatar.jpg';
import useThemeMode from 'hooks/useThemeMode';
import { NavLink } from 'react-router-dom';
import Icon from '../baseUI/Icon';

const Sidebar = () => {
  const { theme, setTheme } = useThemeMode();

  return (
    <div className='w-fit flex flex-col justify-between items-center py-6 bg-secondary-light dark:bg-tertiary-dark h-screen sticky top-0'>
      <NavLink to='#' className='px-1'>
        {/* <img src={Logo} alt='Chat' /> */}
      </NavLink>
      <div className='flex flex-col gap-1'>
        <NavLink to='/' className='py-2 px-4 rounded-md'>
          <Icon icon='user-solid' size={20} />
        </NavLink>
        <NavLink to='#' className='py-2  px-4'>
          <Icon icon='message' size={20} />
        </NavLink>
        <NavLink to='#' className='py-2 px-4'>
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
        <div
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='w-full text-center py-2'
        >
          <Icon
            icon={theme === 'dark' ? 'moon-solid' : 'sun'}
            size={20}
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
