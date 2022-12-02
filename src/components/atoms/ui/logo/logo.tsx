import { Link } from "react-router-dom";
import { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLAnchorElement> {}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <Link
      to="/"
      className={` ${className}
        w-[120px] font-[logoFont] text-3xl font-[900] uppercase drop-shadow transition-all
      `}
    >
      Nova Seller
    </Link>
  );
};
