import { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {}

const PopUp: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`${className} h-auto animate-fadeIn bg-white phone:w-[320px]`}
    >
      {children}
    </div>
  );
};

export default PopUp;
