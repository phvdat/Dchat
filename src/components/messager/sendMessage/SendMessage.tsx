import { yupResolver } from '@hookform/resolvers/yup';
import Icon from 'components/baseUI/icon/Icon';
import Input from 'components/baseUI/input/Input';
import { auth, db } from 'config/firebase';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { set } from 'firebase/database';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
interface ISendMessage {
  message: string;
}
const SendMessage = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
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
    await addDoc(collection(db, 'messages'), {
      message: message.trim(),
      name: auth.currentUser?.displayName,
      avatar: auth.currentUser?.photoURL,
      createdAt: serverTimestamp(),
      uid: auth.currentUser?.uid
    });
    setValue('message', '');
    setFocus('message');
    setShowEmojiPicker(false);
  };

  const onEmojiClick = (emoji: EmojiClickData, event: MouseEvent) => {
    setValue('message', getValues('message') + emoji.emoji);
    setFocus('message');
    setShowEmojiPicker(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex items-center gap-2 p-2 bg-secondary-light dark:bg-secondary-dark 
	absolute bottom-0 w-full border-t border-gray-200 dark:border-gray-500'
    >
      <div className='flex-1'>
        <Input refRegister={register('message')} placeholder='Enter message' />
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
