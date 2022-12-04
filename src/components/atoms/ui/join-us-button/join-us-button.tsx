import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/redux";
import { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLButtonElement> {
  view?: "link" | "button-submit";
  register?: boolean;
}

export const JoinUsButton: FC<Props> = ({
  view,
  register,
  className = "button-submit",
}) => {
  const t = useAppSelector((state) => state.translation.language);

  if (view === "link") {
    return (
      <Link
        to="/auth"
        className={`${className}
        flex items-center items-center justify-center rounded bg-gradient-to-r from-[#2A5275] via-blue-600 to-blue-700 py-2.5 px-4 font-[500] text-white shadow shadow-blue-500/50 transition-colors hover:bg-gradient-to-br
      `}
      >
        {t.user.login}
      </Link>
    );
  }

  return (
    <button
      className={`${className}
        flex items-center items-center justify-center rounded bg-gradient-to-r from-[#2A5275] via-blue-600 to-blue-700 py-2.5 px-4 font-[500] text-white shadow shadow-blue-500/50 transition-colors hover:bg-gradient-to-br
      `}
      type="submit"
    >
      {register ? t.user.register : t.user.login}
    </button>
  );
};
