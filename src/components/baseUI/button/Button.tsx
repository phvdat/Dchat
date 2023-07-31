import React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  const { fullWidth = false, children, className, ...rest } = props;

  return (
    <button
      {...rest}
      className={
        'py-2 px-3 cursor-pointer w-fit bg-primary rounded-md hover:bg-primary-deep shadow-md' +
        (fullWidth ? ' w-full ' : '') +
        className
      }
    >
      {children || 'Button'}
    </button>
  );
};

export default Button;
