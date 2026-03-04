import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header/ui/header";
import { Goals } from "@/features/ui/goals";
import s from "./main.module.scss";

export const Main = () => {
  return (
    <div className={s.main}>
      <Header />
      <Outlet />
      <Goals title={"Generate and send out couple more job applications today to get hired faster "} />
    </div>
  );
};
