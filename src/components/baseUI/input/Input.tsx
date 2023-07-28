import classNames from 'classnames';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
  isError?: boolean;
  refRegister?: UseFormRegisterReturn;
}
const Input = (props: InputProps) => {
  const { prefixIcon, isError, refRegister, ...rest } = props;

  return (
    <div
      className={
        'flex items-center justify-center bg-primary-light dark:bg-primary-dark rounded-md border border-blue-100' +
        (isError ? ' border-error' : '')
      }
    >
      {prefixIcon && <div className='py-2 px-3 h-max'>{prefixIcon}</div>}
      <input
        {...rest}
        {...refRegister}
        className={classNames(
          'px-3 py-2 w-full outline-none  dark:bg-input-dark rounded-r-md',
          { 'rounded-l-md': !prefixIcon }
        )}
      />
    </div>
  );
};

export default Input;
