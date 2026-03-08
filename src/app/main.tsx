import { useLetter } from "@/features/ui/generate-form/model/letterStore";
import { Goals } from "@/features/ui/goals";
import { Header } from "@/widgets/header/ui/header";
import { Outlet, useLocation } from "react-router-dom";
import s from "./main.module.scss";
import { useEffect } from "react";

export const Main = () => {
  const { letters, resetLetter } = useLetter();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      resetLetter(false);
    }
  }, [pathname, resetLetter]);

  return (
    <main className={s.main}>
      <Header />
      <Outlet />
      {letters.length < 5 && (
        <Goals
          title={"Hit your goal"}
          description={"Generate and send out couple more job applications today to get hired faster"}
        />
      )}
    </main>
  );
};
