import Avatar from 'components/baseUI/avatar/Avatar';
import Dropdown from 'components/baseUI/dropdown/Dropdown';
import Icon from 'components/baseUI/icon/Icon';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from 'service/common';
export interface IUser {
  authProvider: string;
  email: string;
  photoURL: string;
  uid: string;
  userName: string;
  friends: [];
}

const HeadMessage = () => {
  const { uid } = useParams();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (uid) {
      getUserById(uid).then((res) => setUser(res));
    }
  }, [uid]);

  return (
    <div
      className='flex justify-between px-5 py-3 bg-secondary-light
		dark:bg-secondary-dark absolute top-0 w-full
		border-b border-gray-200 dark:border-gray-500 shadow-sm'
    >
      <div className='flex gap-2 items-center cursor-pointer'>
        <Avatar name={user?.userName} url={user?.photoURL} size='md' />
        <span>{user?.userName}</span>
      </div>
      <div className='flex gap-5 items-center'>
        <Icon icon='magnifying-glass' className='cursor-pointer' />
        <Icon icon='phone-solid' className='cursor-pointer' />
        <Icon icon='video-solid' className='cursor-pointer' />
        <Icon icon='user-solid' className='cursor-pointer' />
        <Dropdown
          dropdown={<Icon icon='ellipsis-vertical-solid' />}
          dropdownContent={[
            { elementOption: 'Archive' },
            { elementOption: 'Muted' },
            { elementOption: 'Delete' }
          ]}
          place='bottom-left'
        />
      </div>
    </div>
  );
};
export default HeadMessage;
