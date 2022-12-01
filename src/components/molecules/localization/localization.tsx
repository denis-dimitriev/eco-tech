import { useEffect, useState } from "react";
import { localeType } from "../../../types/general";
import { useAppDispatch } from "../../../hooks/hooks";
import { setLanguage } from "../../../features/translation/translations.slice";

export const Localization = () => {
  const [locale, setLocale] = useState<localeType>("RU");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLanguage(locale));
  }, [locale, dispatch]);

  const onRUSelectHandler = () => setLocale("RU");

  const onROSelectHandler = () => setLocale("RO");

  return (
    <div className="relative flex">
      <button className="px-2 hover:text-gray-500" onClick={onRUSelectHandler}>
        RU
      </button>
      /
      <button className="px-2 hover:text-gray-500" onClick={onROSelectHandler}>
        RO
      </button>
      <div
        className={`absolute bottom-[-3px]  ${
          locale === "RU" ? "left-0" : "translate-x-full"
        } h-[2px] w-[40px] bg-indigo-500 transition-transform ease-in`}
      ></div>
    </div>
  );
};
