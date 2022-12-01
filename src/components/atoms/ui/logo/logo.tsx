import { Link } from "react-router-dom";
import { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLAnchorElement> {}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <Link
      to="/"
      className={` ${className}
        flex items-center font-[logoFont] text-3xl font-[900] uppercase drop-shadow transition-all
      `}
    >
      Nova Seller
    </Link>
  );
};
