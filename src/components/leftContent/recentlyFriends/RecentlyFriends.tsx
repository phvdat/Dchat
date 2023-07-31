import Avatar from 'components/baseUI/avatar/Avatar';
import { db } from 'config/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface AccountItemProps {
  uid: string;
  photoURL: string;
  userName: string;
}
const AccountItem = (props: AccountItemProps) => {
  const { photoURL, userName, uid } = props;
  return (
    <Link
      className='flex items-center gap-5 cursor-pointer 
		hover:dark:bg-input-dark hover:bg-input-light p-4 rounded-md'
      to={`/chat/${uid}`}
    >
      <Avatar url={photoURL} name={userName} />
      <p className='truncate text-xs font-semibold text-center'>{userName}</p>
    </Link>
  );
};

const RecentlyFriends = () => {
  const [user, setUser] = useState<AccountItemProps[]>();

  useEffect(() => {
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedUsers: any = [];
      QuerySnapshot.forEach((doc) => {
        fetchedUsers.push({ ...doc.data(), id: doc.id });
      });
      setUser(fetchedUsers);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <h2 className='my-7'>Recently</h2>
      <ul className='flex flex-col gap-2'>
        {user
          ? user.map((item) => (
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
