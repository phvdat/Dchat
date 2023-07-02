import React, { useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Icon from "../icon";

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
        "flex items-center justify-center bg-primary-light dark:bg-primary-dark rounded-md border border-blue-100" +
        (isError ? " border-error" : "")
      }
    >
      {prefixIcon && <div className="py-2 px-3  h-max">{prefixIcon}</div>}
      <input
        {...rest}
        {...refRegister}
        className={
          "px-3 py-2 w-full outline-none  dark:bg-input-dark text-primary-light dark:text-secondary-dark rounded-r-md " +
          +(!prefixIcon ? " rounded-l-md" : "")
        }
      />
    </div>
  );
};

export default Input;
