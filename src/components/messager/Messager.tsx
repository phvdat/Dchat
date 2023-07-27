import classNames from 'classnames';
import Avatar from 'components/baseUI/avatar/Avatar';
import Dropdown from 'components/baseUI/dropdown/Dropdown';
import Icon from 'components/baseUI/Icon';

enum MessageType {
  SEND = 1,
  COME = 2
}
interface IItemMessageProps {
  type: MessageType;
  message: string;
  time: Date;
}
interface IHeadMessageProps {
  name: string;
  avatar: string;
}
const mockData = [
  {
    id: '1',
    type: 1,
    message: 'hello',
    time: new Date()
  },
  {
    id: '2',
    type: 2,
    message: 'Hi',
    time: new Date()
  },
  {
    id: '3',
    type: 1,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    time: new Date()
  },
  {
    id: '4',
    type: 2,
    message:
      'consequuntur tempore maxime quae aperiam facilis nam! Esse alias autem commodi perferendis',
    time: new Date()
  },
  {
    id: '4',
    type: 2,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus esse quia, consequuntur tempore maxime quae aperiam facilis nam! Esse alias autem commodi perferendis, mollitia neque obcaecati, in consequuntur facilis cupiditate quasi, repellendus expedita. Repudiandae laborum eos ipsa distinctio. Et minus architecto suscipit cumque adipisci, vero ratione, debitis voluptate rerum illo odit eius expedita laborum voluptates velit numquam tempore, earum labore. Porro non fugiat autem, odit cupiditate molestiae impedit placeat modi nam quae totam aliquid, pariatur repudiandae et doloremque rem deleniti dolore optio odio minima provident officia! Ipsum, iusto recusandae quod at reprehenderit non hic esse nihil repellendus ut et',
    time: new Date()
  }
];

const HeadMessage = (props: IHeadMessageProps) => {
  const { name, avatar } = props;
  return (
    <div className='flex justify-between px-5 py-3'>
      <div className='flex gap-2 items-center'>
        <Avatar name={name} url={avatar} size='md' />
        <span>{name}</span>
      </div>
      <div className='flex gap-5 items-center'>
        <Icon icon='magnifying-glass' />
        <Icon icon='phone-solid' />
        <Icon icon='video-solid' />
        <Icon icon='user-solid' />
        <Dropdown
          dropdown={<Icon icon='ellipsis-vertical-solid' />}
          dropdownContent={[
            { elementOption: 'Archive' },
            { elementOption: 'Muted' },
            { elementOption: 'Delete' }
          ]}
          place='bottom-left'
        />
      </div>
    </div>
  );
};

const ItemMessage = (props: IItemMessageProps) => {
  const { message, time, type } = props;
  return (
    <div
      className={classNames('flex gap-2', {
        'flex-row-reverse': type === MessageType.SEND
      })}
    >
      <Avatar size='md' />
      <p className='py-1 px-2 bg-gray-400 rounded-md max-w-[600px] bg-gradient-to-r from-indigo-500 to-purple-500'>
        {message}
      </p>
    </div>
  );
};

const Messager = () => {
  const accountInfo = {
    name: 'Pham Dat',
    avatar: 'https://picsum.photos/id/237/200/300'
  };
  return (
    <div>
      <HeadMessage name={accountInfo.name} avatar={accountInfo.avatar} />
      <ul className='flex flex-col gap-2'>
        {mockData.map((item) => (
          <li key={item.id}>
            <ItemMessage {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messager;
