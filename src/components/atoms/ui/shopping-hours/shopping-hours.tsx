import { useAppSelector } from "../../../../hooks/redux";

export const ShoppingHours = () => {
  const t = useAppSelector((state) => state.translation.language);

  return <span className="text-[14px]">{t.store.shopping_hours}</span>;
};
