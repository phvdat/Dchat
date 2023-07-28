import classNames from 'classnames';

interface IErrorMessageProps {
  message?: string;
  textCenter?: boolean;
}
const ErrorMessage = ({ message, textCenter = false }: IErrorMessageProps) => {
  if (!message) return null;
  return (
    <p
      className={classNames('text-error dark:text-error mt-2 text-[12px]', {
        'text-center': textCenter
      })}
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
