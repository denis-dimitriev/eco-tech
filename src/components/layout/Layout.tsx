import { Outlet } from "react-router-dom";
import { Header } from "../organisms/header/Header";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { setTransformHeader } from "../../features/header-slice";

const Layout = () => {
  const dispatch = useAppDispatch();

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      const windowsHeight = window.innerHeight;
      const layoutHeight = document.getElementById("layout")?.offsetHeight!!;
      const layoutTop = document
        .getElementById("layout")
        ?.getBoundingClientRect().top!!;
      if (layoutHeight > windowsHeight) {
        event.deltaY > 0 && dispatch(setTransformHeader(true));
      }
      if (layoutTop === 0) {
        dispatch(setTransformHeader(false));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const layout = document.getElementById("layout");
    const windowsHeight = window.innerHeight;
    layout?.addEventListener(
      "wheel",
      (e: WheelEvent) => {
        if (layout.offsetHeight > windowsHeight) {
          timeout = setTimeout(() => handleScroll(e), 100);
        }
      },
      { passive: true }
    );
    return () => {
      layout?.removeEventListener("wheel", handleScroll);
      clearTimeout(timeout);
    };
  }, [handleScroll]);

  return (
    <div
      id="layout"
      className="layout relative relative flex min-h-[140vh] flex-col"
    >
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
