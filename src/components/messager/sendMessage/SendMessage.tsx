import { yupResolver } from '@hookform/resolvers/yup';
import Icon from 'components/baseUI/icon/Icon';
import Input from 'components/baseUI/input/Input';
import { auth, db } from 'config/firebase';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import {
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { useMemo, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { IUser } from '../headerMessage/HeadeerMessage';
interface ISendMessage {
  message: string;
}
const SendMessage = () => {
  const { uid } = useParams();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [user] = useAuthState(auth);
  const schema = useMemo(() => {
    return yup.object<ISendMessage>().shape({
      message: yup.string().trim().required('Have no message')
    });
  }, []);
  const { register, handleSubmit, setValue, setFocus, getValues } =
    useForm<ISendMessage>({
      resolver: yupResolver(schema)
    });

  const onSubmit = async ({ message }: ISendMessage) => {
    try {
      if (!user || !uid) {
        return;
      }
      await getDoc(doc(db, 'users', user.uid)).then((docSnap) => {
        if (docSnap.exists()) {
          const friends = docSnap.data().friends;
          const friend = friends.find((item: IUser) => (item.uid = uid));
          updateDoc(doc(db, 'conversation', friend.conversationId), {
            message: arrayUnion({
              content: message.trim(),
              name: auth.currentUser?.displayName,
              avatar: auth.currentUser?.photoURL,
              createdAt: serverTimestamp(),
              uid: auth.currentUser?.uid
            })
          });
        }
      });

      setValue('message', '');
      setFocus('message');
      setShowEmojiPicker(false);
    } catch (error) {
      console.log('falseeeee', error);
    }
  };

  const onEmojiClick = (emoji: EmojiClickData, event: MouseEvent) => {
    setValue('message', getValues('message') + emoji.emoji);
    setFocus('message');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex items-center gap-2 p-2 bg-secondary-light dark:bg-secondary-dark 
	absolute bottom-0 w-full border-t border-gray-200 dark:border-gray-500'
    >
      <div className='flex-1'>
        <Input
          refRegister={register('message')}
          placeholder='Enter message'
          autoComplete='off'
        />
      </div>
      <div className='relative hidden md:block'>
        <div
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className='cursor-pointer px-2'
        >
          <Icon icon='face-smile-regular' />
        </div>
        {showEmojiPicker && (
          <div className='absolute bottom-5 right-5'>
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </div>
      <button className='px-2 cursor-pointer' type='submit'>
        <Icon icon='paper-plane-solid' />
      </button>
    </form>
  );
};

export default SendMessage;
