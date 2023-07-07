import Dropdown from 'components/baseUI/dropdown/Dropdown';
import Icon from 'components/baseUI/Icon';

const Profile = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-tiny tex font-medium'>Profile</h1>
        <Dropdown
          elementAction={<Icon icon='three-dot' />}
          list={[{ elementOption: 'Edit' }, { elementOption: 'Setting' }]}
        />
      </div>
    </div>
  );
};

export default Profile;
