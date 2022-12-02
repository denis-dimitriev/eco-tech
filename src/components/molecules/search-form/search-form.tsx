import { ChangeEvent, FC, FormEvent, HTMLProps, useState } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { SearchIcon } from "../../../assets/icons";

interface Props extends HTMLProps<HTMLFormElement> {}

export const SearchForm: FC<Props> = ({ className }) => {
  const t = useAppSelector((state) => state.translation.language);

  const [term, setTerm] = useState<string>("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function onInputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
  }

  return (
    <form
      className={` ${className} relative min-w-[320px]`}
      onSubmit={onSubmit}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
        <SearchIcon className="w-[16px]" />
      </div>
      <input
        type="text"
        className="search block w-full rounded border bg-gray-100 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder={`... ${t.store.search}`}
        value={term}
        onChange={onInputChangeHandler}
      />
      <button
        type="submit"
        className="absolute top-0 right-0 rounded-r border border-blue-700 bg-blue-700 py-2 px-3 hover:bg-blue-800 focus:outline-none"
      >
        <SearchIcon className="h-[20px] w-[20px] fill-white" />
      </button>
    </form>
  );
};
