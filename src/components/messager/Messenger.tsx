import HeadMessage from './headerMessage/HeadeerMessage';
import MessageContent from './messageContent/MessageContent';
import SendMessage from './sendMessage/SendMessage';

const Messenger = () => {
  return (
    <div className='h-screen no-scrollbar sticky sm:relative '>
      <HeadMessage />
      <MessageContent />
      <SendMessage />
    </div>
  );
};

export default Messenger;
