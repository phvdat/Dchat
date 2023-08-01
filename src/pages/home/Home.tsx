import { IUser } from 'components/messager/headerMessage/HeadeerMessage';
import Messager from 'components/messager/Messager';
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

const HomePage = () => {
  const { uid } = useParams();
  const [user] = useAuthState(auth);

  const initConversation = async (uid: string) => {
    const docRef = await addDoc(collection(db, 'messages'), {});
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
  const getUser = async (uid: string) => {
    try {
      const docSnap = await getDoc(doc(db, 'users', uid));
      if (docSnap.exists()) {
        return docSnap.data();
      }
    } catch (error) {
      //
    }
  };

  useEffect(() => {
    if (user && uid) {
      getUser(user.uid).then((res) => {
        const friends = res?.friends;
        if (
          !friends ||
          !Object.keys(friends).length ||
          !friends.find((item: IUser) => {
            return item.uid === uid;
          })
        ) {
          console.log(
            !friends,
            !Object.keys(friends).length,
            !friends.find((item: IUser) => {
              return item.uid === uid;
            })
          );

          initConversation(uid);
        }
      });
    }
  }, [user, uid]);

  return (
    <div className='flex'>
      <div className='w-[380px] py-8 h-screen overflow-auto hidden md:block'>
        <Outlet />
      </div>
      <div className='flex-grow bg-secondary-light dark:bg-secondary-dark'>
        <Messager />
      </div>
    </div>
  );
};

export default HomePage;
