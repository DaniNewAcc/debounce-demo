import React, { ReactNode } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string | boolean;
  wrapperClasses?: string;
  labelClasses?: string;
  inputClasses?: string;
  errorClasses?: string;
  children?: ReactNode;
}

function Input({
  label,
  id,
  error,
  wrapperClasses,
  labelClasses,
  inputClasses,
  errorClasses,
  children,
  ...props
}: InputProps) {
  return (
    <div className={wrapperClasses}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <input className={inputClasses} id={id} {...props} />
      <div className={errorClasses}>{error && <p>{error}</p>}</div>
      {children}
    </div>
  );
}

export default Input;
