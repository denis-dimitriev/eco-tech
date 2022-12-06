import { Outlet } from "react-router-dom";
import { Header } from "../organisms";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setTransformHeader } from "../../features/header.slice";

const Layout = () => {
  const dispatch = useAppDispatch();
  const backdrop = useAppSelector((state) => state.backdrop.isOpen);

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

      if (layoutTop > -50) {
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

  useEffect(() => {
    if (backdrop) {
      document.body.style.overflow = "hidden";
    }
  }, [backdrop]);

  return (
    <div id="layout" className="layout relative flex min-h-[100vh] flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
