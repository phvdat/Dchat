import Avatar from 'components/baseUI/avatar/Avatar';
import { auth, db } from 'config/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

interface AccountItemProps {
  uid: string;
  photoURL: string;
  userName: string;
}
const AccountItem = (props: AccountItemProps) => {
  const { photoURL, userName } = props;
  return (
    <div className='max-w-[76px] min-w-[76px] min-h-[50px] rounded-md bg-input-light dark:bg-input-dark relative mt-7'>
      <a className='absolute min-w-[76px] max-w-[76px] bottom-0 p-2 overflow-hidden cursor-pointer'>
        <div className='max-w-[40px] min-w-[40px] m-auto'>
          <Avatar url={photoURL} name={userName} />
        </div>
        <p className='truncate text-[12px] font-semibold text-center'>
          {userName}
        </p>
      </a>
    </div>
  );
};

const MostInteractiveFriends = () => {
  const [users, setUsers] = useState<AccountItemProps[]>();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      return;
    }
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedUsers: any = [];
      QuerySnapshot.forEach((doc) => {
        if (doc.data().uid !== user.uid)
          fetchedUsers.push({ ...doc.data(), id: doc.id });
      });
      setUsers(fetchedUsers);
    });
    return () => unsubscribe();
  }, [user]);
  return (
    <ul className='flex gap-2 overflow-auto no-scrollbar'>
      {users
        ? users.map((item) => (
            <li key={item.uid}>
              <AccountItem {...item} />
            </li>
          ))
        : null}
    </ul>
  );
};

export default MostInteractiveFriends;
