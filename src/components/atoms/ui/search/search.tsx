import { Link } from "react-router-dom";
import { SearchIcon } from "../../../../assets/icons";
import { useAppSelector } from "../../../../hooks/redux";

export const Search = () => {
  const t = useAppSelector((state) => state.translation.language);

  return (
    <Link
      to="/search"
      className="group flex h-[42px] w-[100px] cursor-pointer items-center justify-center gap-x-3 border-b-[1px] border-solid border-indigo-500 transition-all"
    >
      <SearchIcon className="transition-transform group-hover:scale-[1.1]" />
      {t.store.search}
    </Link>
  );
};
