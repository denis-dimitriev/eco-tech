import { FC, HTMLProps } from "react";

interface LocaleButtonProps extends HTMLProps<HTMLButtonElement> {}

export const LocaleButton: FC<LocaleButtonProps> = ({
  children,
  className,
}) => {
  return (
    <button className={`${className} transition-all hover:text-gray-300`}>
      {children}
    </button>
  );
};
