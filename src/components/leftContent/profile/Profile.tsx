import Dropdown from 'components/baseUI/dropdown/Dropdown';
import Icon from 'components/baseUI/Icon';

const Profile = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-tiny tex font-medium'>Profile</h1>
        <Dropdown
          dropdown={<Icon icon='three-dot' />}
          dropdownContent={[
            { elementOption: 'Edit', horizontal: true },
            { elementOption: 'Setting' }
          ]}
          place='top-left'
        />
      </div>
    </div>
  );
};

export default Profile;
