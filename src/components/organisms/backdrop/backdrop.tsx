import { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {}

export const Backdrop: FC<Props> = ({ children, className }) => {
  return (
    <div className={`${className} backdrop flex items-center justify-center`}>
      {children}
    </div>
  );
};
