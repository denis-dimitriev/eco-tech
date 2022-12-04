import { CatalogButton } from "../../atoms/ui/catalog-button/catalog-button";
import { useAppSelector } from "../../../hooks/redux";
import { Logo } from "../../atoms/ui";
import { MainNav, SearchForm, UserActions } from "../../molecules";

export const HeaderMenu = () => {
  const transform = useAppSelector((state) => state.transform.headerTransform);

  return (
    <div className="flex h-[60px] w-full bg-[#0E1821] text-white">
      <div
        className={`container flex items-center ${
          transform ? "justify-between" : "justify-start"
        } transition-all`}
      >
        <Logo
          className={`${
            transform ? "block animate-fadeIn" : "hidden"
          } transition-all duration-200`}
        />
        <CatalogButton />
        <MainNav className={`${transform && "hidden"}`} />
        {transform && <SearchForm className="w-1/2" />}
        {transform && (
          <UserActions
            className={`${
              transform ? "block animate-fadeIn" : "hidden"
            } transition-all duration-200`}
            icoFill={"white"}
          />
        )}
      </div>
    </div>
  );
};
