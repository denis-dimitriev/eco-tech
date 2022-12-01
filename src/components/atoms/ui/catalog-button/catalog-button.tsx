import { MenuIcon } from "../../../../assets/icons";
import { useAppSelector } from "../../../../hooks/hooks";

export const CatalogButton = () => {
  const t = useAppSelector((state) => state.translation.language);
  const transform = useAppSelector((state) => state.transform.headerTransform);

  return (
    <div
      className={`${
        transform ? "w-auto bg-transparent" : "w-[320px] bg-[#243C53]"
      } h-full select-none p-4 text-white`}
    >
      <button className="flex items-center gap-x-3">
        <MenuIcon className="h-[30px] w-[30px]" />
        {!transform && t.menu.catalog}
      </button>
    </div>
  );
};
