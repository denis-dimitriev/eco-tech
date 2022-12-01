import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactNode;
  to: string;
}

export const IcoLink = ({ children, to }: Props) => {
  return (
    <NavLink to={to} className="transition-transform hover:scale-[1.1]">
      {children}
    </NavLink>
  );
};
