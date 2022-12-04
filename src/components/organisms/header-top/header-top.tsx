import { Logo, Search, ShoppingHours, TelNumber } from "../../atoms/ui";
import { Localization, UserActions } from "../../molecules";
import { useAppSelector } from "../../../hooks/redux";

export const HeaderTop = () => {
  const transform = useAppSelector((state) => state.transform.headerTransform);

  return (
    <div className="flex h-[80px] w-full bg-white">
      <div className="container flex items-center justify-between">
        <Logo
          className={`${
            transform && "translate-y-full opacity-0"
          } transition-all duration-200`}
        />
        <TelNumber />
        <ShoppingHours />
        <Search />
        <Localization />
        <UserActions
          className={`${
            transform && "translate-y-full opacity-0"
          } duration-500\`} transition-all duration-200`}
        />
      </div>
    </div>
  );
};
