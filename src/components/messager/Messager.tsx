import HeadMessage from './headerMessage/HeadeerMessage';
import MessageContent from './messageContent/MessageContent';
import SendMessage from './sendMessage/SendMessage';

const Messager = () => {
  const accountInfo = {
    name: 'Pham Dat',
    avatar: 'https://picsum.photos/id/237/200/300'
  };
  return (
    <div className='relative h-screen'>
      <HeadMessage name={accountInfo.name} avatar={accountInfo.avatar} />
      <MessageContent />
      <SendMessage />
    </div>
  );
};

export default Messager;
