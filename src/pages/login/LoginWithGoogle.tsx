import Button from 'components/baseUI/button/Button';
import Icon from 'components/baseUI/icon/Icon';
import { db } from 'config/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const LoginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const handleLoginWithGg = async () => {
    try {
      const auth = getAuth();
      const { user } = await signInWithPopup(auth, provider);
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        userName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        authProvider: 'google',
        friends: {}
      });
    } catch (error) {
      //
    }
  };
  return (
    <Button
      fullWidth
      onClick={handleLoginWithGg}
      className='bg-red-500 text-white hover:bg-red-600'
      type='button'
    >
      <Icon icon='google' /> Login with Google
    </Button>
  );
};

export default LoginWithGoogle;
