import { useForm } from "@/features/ui/generate-form/model/formStore";
import { Goals } from "@/features/ui/goals";
import { Header } from "@/widgets/header/ui/header";
import { Outlet } from "react-router-dom";
import s from "./main.module.scss";

export const Main = () => {
  const { letters } = useForm();

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
