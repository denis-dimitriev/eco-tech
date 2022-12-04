import { FC, HTMLProps } from "react";
import { CloseIcon } from "../../../../assets/icons";

interface Props extends HTMLProps<HTMLButtonElement> {}

export const CloseButton: FC<Props> = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <CloseIcon />
    </button>
  );
};
