import { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {}

export const Checkbox: FC<Props> = ({ label, onChange }) => {
  return (
    <div className="mb-5 flex items-center gap-x-[7px]">
      <input
        id={label}
        type="checkbox"
        className="h-[20px] w-[20px]"
        onChange={onChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
