import React from 'react';

const mockData: AccountItemProps[] = [
  {
    id: '1',
    avatar: 'https://i.pravatar.cc/300',
    name: 'Patrickkkkkkkk'
  },
  {
    id: '2',
    avatar: 'https://i.pravatar.cc/300',
    name: 'Doris'
  },
  {
    id: '3',
    avatar: 'https://i.pravatar.cc/300',
    name: 'Emily'
  },
  {
    id: '4',
    avatar: 'https://i.pravatar.cc/300',
    name: 'Steve'
  },
  {
    id: '5',
    avatar: 'https://i.pravatar.cc/300',
    name: 'John'
  },
  {
    id: '5',
    avatar: 'https://i.pravatar.cc/300',
    name: 'John'
  },
  {
    id: '5',
    avatar: 'https://i.pravatar.cc/300',
    name: 'John'
  },
  {
    id: '5',
    avatar: 'https://i.pravatar.cc/300',
    name: 'John'
  },
  {
    id: '5',
    avatar: 'https://i.pravatar.cc/300',
    name: 'John'
  }
];
interface AccountItemProps {
  id: string;
  avatar: string;
  name: string;
}
const AccountItem = (props: AccountItemProps) => {
  const { avatar, name } = props;
  return (
    <div className='max-w-[76px] min-w-[76px] min-h-[50px] rounded-md bg-input-light dark:bg-input-dark relative mt-7'>
      <a className='absolute min-w-[76px] max-w-[76px] bottom-0 p-2 overflow-hidden cursor-pointer'>
        <img
          className='rounded-full max-w-[40px] min-w-[40px] m-auto'
          src={avatar}
          alt={`${name} avatar`}
        />
        <p className='truncate text-[12px] font-semibold text-center'>{name}</p>
      </a>
    </div>
  );
};

const MostInteractiveFriends = () => {
  return (
    <ul className='flex gap-2 overflow-auto no-scrollbar'>
      {mockData.map((item) => (
        <li key={item.id}>
          <AccountItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default MostInteractiveFriends;
