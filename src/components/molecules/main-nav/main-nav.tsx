import { useAppSelector } from "../../../hooks/redux";
import { NavLink } from "react-router-dom";
import { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLUListElement> {}

export const MainNav: FC<Props> = ({ className }) => {
  const t = useAppSelector((state) => state.translation.language);

  const links = [
    { name: t.menu.about, path: "about" },
    { name: t.menu.promo, path: "promo" },
    { name: t.menu.credit, path: "credit" },
    { name: t.menu.service_and_warranty, path: "service_and_warranty" },
    { name: t.menu.wholesale, path: "wholesale" },
    { name: t.menu.contacts, path: "contacts" },
  ];

  return (
    <ul className={`${className} flex gap-[40px] p-6`}>
      {links.map((link) => (
        <li key={link.path}>
          <NavLink to={link.path}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};
