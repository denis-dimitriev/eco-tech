import React, { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  success?: boolean;
  error?: boolean;
}

export const Input: FC<Props> = ({
  className,
  label,
  placeholder,
  type,
  value,
  success,
  error,
  maxLength,
  required,
  onChange,
}) => {
  const successInput = success
    ? "bg-green-50 border-green-500 text-green-600 focus:ring-green-500 focus:border-green-500"
    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500";

  const errorInput = error
    ? "bg-red-50 border-red-300 text-red-600 focus:ring-red-500 focus:border-red-500"
    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="mb-5 flex flex-col">
      <label
        htmlFor={label}
        className={`${success && "text-green-700"} ${
          error && "text-red-700"
        } mb-2`}
      >
        {label}
      </label>

      <input
        type={type}
        id={label}
        value={value}
        className={` ${className}
        ${successInput} ${errorInput}
           w-full rounded border-2 border-solid py-2.5 pl-4 pr-2.5 
        `}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};
