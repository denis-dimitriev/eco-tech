import { HeaderTop } from "../header-top/header-top";
import { HeaderMenu } from "../header-menu/header-menu";
import { useAppSelector } from "../../../hooks/redux";

export const Header = () => {
  const transform = useAppSelector((state) => state.transform.headerTransform);

  return (
    <header
      className={`${transform ? "translate-y-[-80px]" : "translate-y-0"}`}
    >
      <HeaderTop />
      <HeaderMenu />
    </header>
  );
};
