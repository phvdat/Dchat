import classNames from 'classnames';
import Avatar from 'components/baseUI/avatar/Avatar';
import { auth, db } from 'config/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { getUserById } from 'service/common';
import { IItemMessageProps } from 'types/MessageType';

const ItemMessage = (props: IItemMessageProps) => {
  const [user] = useAuthState(auth);
  const { content, uid, avatar } = props;
  return (
    <div
      className={classNames('flex gap-2', {
        'flex-row-reverse': user?.uid === uid
      })}
    >
      <Avatar size='md' url={avatar} />
      <p className='py-1 px-2 rounded-md max-w-[600px] bg-gray-300 dark:bg-gradient-to-r from-indigo-500 to-purple-500'>
        {content}
      </p>
    </div>
  );
};

const MessageContent = () => {
  const { uid } = useParams();
  const [messages, setMessages] = useState<IItemMessageProps[]>();
  const ref = useRef<HTMLUListElement>(null);
  const [conversationId, setConversationId] = useState<string>('');
  const [user] = useAuthState(auth);

  const scrollDown = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        block: 'start'
      });
    }
  };

  useEffect(() => {
    if (user && uid) {
      getUserById(user?.uid).then((res) => {
        if (res) {
          const friend = res.friends.find(
            (item: any) => item.uid === uid
          ) as any;
          friend && setConversationId(friend?.conversationId);
        }
      });
    }
  }, [user, uid]);

  useEffect(() => {
    if (!conversationId) {
      return;
    }
    const unsubscribe = onSnapshot(
      doc(db, 'conversation', conversationId),
      (doc) => {
        const fetchedMessages = doc.data()?.message;
        if (fetchedMessages) {
          const sortedMessages = fetchedMessages.sort(
            (a: IItemMessageProps, b: IItemMessageProps) =>
              a.createdAt > b.createdAt
          );
          setMessages(sortedMessages);
        }
      }
    );
    return () => unsubscribe();
  }, [conversationId]);

  useLayoutEffect(() => {
    scrollDown();
    // need a button scroll down
  }, [messages]);

  return (
    <ul className='flex flex-col gap-2 overflow-auto height-screen pt-20'>
      {messages?.map((item) => (
        <li key={item.id}>
          <ItemMessage {...item} />
        </li>
      ))}
      <span ref={ref} className='block md:min-h-[60px]'></span>
    </ul>
  );
};

export default MessageContent;
