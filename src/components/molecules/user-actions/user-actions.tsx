import {
  CartIcon,
  CompareIcon,
  EyeIcon,
  FavoriteIcon,
} from "../../../assets/icons";
import { IcoLink, JoinUsButton } from "../../atoms/ui";
import { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  icoFill?: "white" | "black";
}

export const UserActions: FC<Props> = ({ icoFill = "black", className }) => {
  return (
    <div className={` ${className} flex items-center gap-x-[30px]`}>
      <IcoLink to="/watched">
        <EyeIcon className={`fill-${icoFill}`} />
      </IcoLink>

      <IcoLink to="/favorite">
        <FavoriteIcon className={`fill-${icoFill}`} />
      </IcoLink>

      <IcoLink to="/compare">
        <CompareIcon className={`fill-${icoFill}`} />
      </IcoLink>

      <IcoLink to="/shopping-cart">
        <CartIcon className={`fill-${icoFill}`} />
      </IcoLink>

      <JoinUsButton />
    </div>
  );
};
