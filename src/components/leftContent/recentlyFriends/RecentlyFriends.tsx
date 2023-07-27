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
    <a className='flex items-center gap-5 cursor-pointer hover:dark:bg-input-dark hover:bg-input-light p-4 rounded-md'>
      <img
        className='rounded-full max-w-[40px] min-w-[40px]'
        src={avatar}
        alt={`${name} avatar`}
      />
      <p className='truncate text-xs font-semibold text-center'>{name}</p>
    </a>
  );
};

const RecentlyFriends = () => {
  return (
    <div>
      <h2 className='my-7'>Recently</h2>
      <ul className='flex flex-col gap-2'>
        {mockData.map((item) => (
          <li key={item.id}>
            <AccountItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyFriends;
