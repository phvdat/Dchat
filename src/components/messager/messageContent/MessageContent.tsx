import classNames from 'classnames';
import Avatar from 'components/baseUI/avatar/Avatar';
import { auth, db } from 'config/firebase';
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query
} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IItemMessageProps } from 'types/MessageType';

const ItemMessage = (props: IItemMessageProps) => {
  const [user] = useAuthState(auth);
  const { message, uid } = props;
  return (
    <div
      className={classNames('flex gap-2', {
        'flex-row-reverse': user?.uid === uid
      })}
    >
      <Avatar size='md' />
      <p className='py-1 px-2 bg-gray-400 rounded-md max-w-[600px] bg-gradient-to-r from-indigo-500 to-purple-500'>
        {message}
      </p>
    </div>
  );
};

const MessageContent = () => {
  const [messages, setMessages] = useState<IItemMessageProps[]>();
  const ref = useRef<HTMLUListElement>(null);

  const scrollDown = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: any = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a: IItemMessageProps, b: IItemMessageProps) =>
          a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    scrollDown();
  }, [messages]);

  return (
    <ul className='flex flex-col gap-2 overflow-auto max-h-screen pt-20'>
      {messages?.map((item) => (
        <li key={item.id}>
          <ItemMessage {...item} />
        </li>
      ))}
      <span ref={ref} className='block min-h-[60px]'></span>
    </ul>
  );
};

export default MessageContent;
