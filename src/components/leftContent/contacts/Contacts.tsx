import Icon from 'components/baseUI/icon/Icon';
import Input from 'components/baseUI/input/Input';
import MostInteractiveFriends from 'components/leftContent/mostInteractiveFriends/MostInteractiveFriends';
import RecentlyFriends from 'components/leftContent/recentlyFriends/RecentlyFriends';
import Sidebar from 'components/sidebar/Sidebar';

const Contacts = () => {
  return (
    <div className='mx-1 min-h-screen'>
      <div className='flex'>
        <Sidebar />
        <div className='p-2 border-gray-400 ml-[52px] flex-1'>
          <div className='p-3'>
            <h1 className='text-tiny font-medium'>Contacts</h1>
            <Input
              placeholder='Search messages or users'
              prefixIcon={<Icon icon='magnifying-glass' />}
            />
            <MostInteractiveFriends />
          </div>
          <RecentlyFriends />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
