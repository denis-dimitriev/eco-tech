import {
  CartIcon,
  CompareIcon,
  EyeIcon,
  FavoriteIcon,
} from "../../../assets/icons";
import { IcoLink, JoinUsButton } from "../../atoms/ui";
import { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  icoFill?: "white";
}

export const UserActions: FC<Props> = ({ icoFill, className }) => {
  return (
    <div className={` ${className} flex items-center gap-x-[30px]`}>
      <IcoLink to="/watched">
        <EyeIcon className={`${icoFill && "fill-white"}`} />
      </IcoLink>

      <IcoLink to="/favorite">
        <FavoriteIcon className={`${icoFill && "fill-white"}`} />
      </IcoLink>

      <IcoLink to="/compare">
        <CompareIcon className={`${icoFill && "fill-white"}`} />
      </IcoLink>

      <IcoLink to="/shopping-cart">
        <CartIcon className={`${icoFill && "fill-white"}`} />
      </IcoLink>

      <JoinUsButton view={"link"} className="h-[42px] w-[98px]" />
    </div>
  );
};
