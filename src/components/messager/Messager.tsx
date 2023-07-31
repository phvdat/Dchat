import HeadMessage from './headerMessage/HeadeerMessage';
import MessageContent from './messageContent/MessageContent';
import SendMessage from './sendMessage/SendMessage';

const Messager = () => {
  return (
    <div className='h-screen sticky sm:relative '>
      <HeadMessage />
      <MessageContent />
      <SendMessage />
    </div>
  );
};

export default Messager;
