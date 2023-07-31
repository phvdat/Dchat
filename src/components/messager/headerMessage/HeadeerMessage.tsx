import Avatar from 'components/baseUI/avatar/Avatar';
import Dropdown from 'components/baseUI/dropdown/Dropdown';
import Icon from 'components/baseUI/icon/Icon';
import { db } from 'config/firebase';
import {
  collection,
  doc,
  documentId,
  limit,
  onSnapshot,
  orderBy,
  query,
  where
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface IUser {
  name: string;
  avatar: string;
}

const HeadMessage = () => {
  const { uid } = useParams();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (uid) {
      const q = query(
        collection(db, 'users')
        // where('uid', '==', uid),
        // limit(1),
        // doc(uid)
        // documentId(uid)
      );
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        // setUser(QuerySnapshot.docs.);
        console.log(QuerySnapshot.docs);

        return () => unsubscribe();
      });
    }
  }, [uid]);

  const { name, avatar } = { name: 'dat', avatar: 'fdas f' };
  return (
    <div
      className='flex justify-between px-5 py-3 bg-secondary-light
		dark:bg-secondary-dark absolute top-0 w-full
		border-b border-gray-200 dark:border-gray-500 shadow-sm'
    >
      <div className='flex gap-2 items-center cursor-pointer'>
        <Avatar name={name} url={avatar} size='md' />
        <span>{name}</span>
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
