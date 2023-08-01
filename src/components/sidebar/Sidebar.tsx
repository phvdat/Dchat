// import Logo from 'src/assets/imgs/avatar.jpg';
import Icon from 'components/baseUI/icon/Icon';
import { RoutePath } from 'constants/routes';
import { getAuth, signOut } from 'firebase/auth';
import useThemeMode from 'hooks/useThemeMode';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { theme, setTheme } = useThemeMode();
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        navigate(RoutePath.Login);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div
      className='w-fit flex flex-col justify-between items-center py-6 bg-white shadow-sm 
		dark:bg-tertiary-dark h-full fixed top-0 left-0'
    >
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

        <div className='w-full text-center py-2'>
          <Icon
            onClick={handleLogout}
            icon='logout'
            size={20}
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
