import Icon from 'components/baseUI/icon/Icon';
import Input from 'components/baseUI/input/Input';
import MostInteractiveFriends from 'components/leftContent/mostInteractiveFriends/MostInteractiveFriends';
import RecentlyFriends from 'components/leftContent/recentlyFriends/RecentlyFriends';

const Chats = () => {
  return (
    <div className='mx-1'>
      <div className='p-2  border-gray-400'>
        <div className='p-3'>
          <h1 className='text-tiny font-medium'>Chats</h1>
          <Input
            placeholder='Search messages or users'
            prefixIcon={<Icon icon='magnifying-glass' />}
          />
          <MostInteractiveFriends />
        </div>
        <RecentlyFriends />
      </div>
    </div>
  );
};

export default Chats;
