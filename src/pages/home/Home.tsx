import Profile from 'components/leftContent/profile/Profile';

const HomePage = () => {
  return (
    <div className='flex'>
      <div className='w-96 p-8'>
        <Profile />
      </div>
      <div className='w-full bg-secondary-light dark:bg-secondary-dark'>
        main content
      </div>
    </div>
  );
};

export default HomePage;
