import { useAppSelector } from "../../../hooks/hooks";
import { NavLink } from "react-router-dom";

export const MainNav = () => {
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
    <ul className="flex gap-x-[40px] p-6">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink to={link.path}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};
