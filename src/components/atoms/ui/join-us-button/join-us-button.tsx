import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hooks";

export const JoinUsButton = () => {
  const t = useAppSelector((state) => state.translation.language);

  return (
    <Link
      to="/auth"
      className="flex h-[42px] w-[98px] items-center items-center justify-center rounded bg-gradient-to-r  from-[#2A5275] via-blue-600 to-blue-700 font-[500] text-white shadow shadow-blue-500/50 transition-colors hover:bg-gradient-to-br"
    >
      {t.user.login}
    </Link>
  );
};
