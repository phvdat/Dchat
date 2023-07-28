import Avatar from 'components/baseUI/avatar/Avatar';
import Dropdown from 'components/baseUI/dropdown/Dropdown';
import Icon from 'components/baseUI/icon/Icon';

const props = {
  name: 'Pham Dat'
};
const Profile = () => {
  const { name } = props;
  return (
    <div className='mx-1'>
      <div className='border-b p-5  border-gray-400'>
        <div className='flex justify-between items-center'>
          <h1 className='text-tiny font-medium'>Profile</h1>
          <Dropdown
            dropdown={<Icon icon='ellipsis-vertical-solid' />}
            dropdownContent={[{ elementOption: 'Edit' }]}
            place='bottom-left'
          />
        </div>
        <div className='flex items-center flex-col my-7'>
          <Avatar size='lg' name={name} />
          <span className='font-semibold text-xs mt-5'>{name}</span>
        </div>
      </div>
      <p className='p-5'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga
        assumenda impedit nam praesentium
      </p>
    </div>
  );
};

export default Profile;
