import React from "react";
interface IErrorMessageProps {
  message?: string;
}
const ErrorMessage = ({ message }: IErrorMessageProps) => {
  if (!message) return null;
  return <p className="text-error dark:text-error mt-2">{message}</p>;
};

export default ErrorMessage;
