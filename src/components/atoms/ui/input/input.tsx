import React, { FC, HTMLProps } from "react";
import {
  DEFAULT_INPUT_CLASS,
  SUCCESS_INPUT_CLASS,
} from "../../../../constants";

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
  const successInput = success ? SUCCESS_INPUT_CLASS : DEFAULT_INPUT_CLASS;

  const errorInput = error ? SUCCESS_INPUT_CLASS : DEFAULT_INPUT_CLASS;

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
