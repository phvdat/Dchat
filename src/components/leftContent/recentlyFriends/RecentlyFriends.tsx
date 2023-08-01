import classNames from 'classnames';
import Avatar from 'components/baseUI/avatar/Avatar';
import { auth, db } from 'config/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';

interface AccountItemProps {
  uid: string;
  photoURL: string;
  userName: string;
}
const AccountItem = (props: AccountItemProps) => {
  const { photoURL, userName, uid } = props;
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          'flex items-center gap-5 cursor-pointer',
          'hover:dark:bg-input-dark hover:bg-input-light p-4 rounded-md',
          {
            'bg-input-light': isActive
          },
          {
            'dark:bg-input-dark': isActive
          }
        )
      }
      to={`/chat/${uid}`}
    >
      <Avatar url={photoURL} name={userName} />
      <p className='truncate text-xs font-semibold text-center'>{userName}</p>
    </NavLink>
  );
};

const RecentlyFriends = () => {
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
    <div>
      <h2 className='my-7'>Friends</h2>
      <ul className='flex flex-col gap-2'>
        {users
          ? users.map((item) => (
              <li key={item.uid}>
                <AccountItem {...item} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default RecentlyFriends;
