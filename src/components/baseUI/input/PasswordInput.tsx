import { useState } from 'react';
import Icon from '../Icon';
import Input, { InputProps } from './Input';

const PasswordInput = (props: InputProps) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className='relative'>
      <Input
        {...props}
        type={hidden ? 'password' : 'text'}
        style={{ paddingRight: '36px' }}
      />
      <div className='absolute right-0 top-0 py-2 px-3 cursor-pointer'>
        <Icon
          icon={hidden ? 'eye-slash-solid' : 'eye-solid'}
          onClick={() => setHidden(!hidden)}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
