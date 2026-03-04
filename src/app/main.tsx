import { Goals } from "@/features/ui/goals";
import { Header } from "@/widgets/header/ui/header";
import { Outlet } from "react-router-dom";
import s from "./main.module.scss";

export const Main = () => {
  const goals = 0;

  return (
    <main className={s.main}>
      <Header goals={goals} />
      <Outlet />
      {goals < 5 && (
        <Goals
          goals={goals}
          title={"Generate and send out couple more job applications today to get hired faster "}
        />
      )}
    </main>
  );
};
