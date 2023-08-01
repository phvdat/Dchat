import { IUser } from 'components/messager/headerMessage/HeadeerMessage';
import { db } from 'config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const getUserById = async (uid: string) => {
  try {
    const docSnap = await getDoc(doc(db, 'users', uid));
    if (docSnap.exists()) {
      return docSnap.data() as IUser;
    }
  } catch (error) {
    //
  }
};
