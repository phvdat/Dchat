import Contacts from 'components/leftContent/contacts/Contacts';
import Messenger from 'components/messager/Messenger';
import NoMessage from 'components/messager/NoMessage';
import { auth, db } from 'config/firebase';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc
} from 'firebase/firestore';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useParams } from 'react-router-dom';
import { getUserById } from 'service/common';

const HomePage = () => {
  const { uid } = useParams();
  const [user] = useAuthState(auth);

  const initConversation = async (uid: string) => {
    const docRef = await addDoc(collection(db, 'conversation'), {});
    if (user) {
      await updateDoc(doc(db, 'users', user.uid), {
        friends: arrayUnion({
          uid: uid,
          conversationId: docRef.id
        })
      });
      await updateDoc(doc(db, 'users', uid), {
        friends: arrayUnion({
          uid: user.uid,
          conversationId: docRef.id
        })
      });
    }
  };

  useEffect(() => {
    if (user && uid) {
      getUserById(user.uid).then((res) => {
        const friends = res?.friends;
        if (friends && Object.keys(friends).length) {
          const isFriend = friends.find((item: any) => {
            return item.uid === uid;
          });
          getDoc(doc(db, 'users', uid)).then((docSnap) => {
            const isValidUser = docSnap.exists();
            if (!isFriend && isValidUser) {
              initConversation(uid);
            }
          });
        }
      });
    }
  }, [user, uid]);

  return (
    <div className='flex'>
      <div className='w-[430px] h-screen no-scrollbar hidden md:block'>
        <Outlet />
      </div>
      <div className='flex-grow bg-secondary-light dark:bg-secondary-dark'>
        {uid ? (
          <Messenger />
        ) : (
          <>
            <div className='hidden md:block'>
              <NoMessage />
            </div>
            <div className='md:hidden'>
              <Contacts />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
