import Plus from "@/assets/icons/svg/Plus.svg?react";
import { Header, PolymorphButton } from "@/shared/ui";
import { Link } from "react-router-dom";
import s from "./dashboard.module.scss";

export const Dashboard = () => {
  return (
    <div className={s.mainPageWrapper}>
      <Header>
        <h1>Applications</h1>
        <PolymorphButton
          as={Link}
          to={"/generation"}
          variant={"primary"}
          className={s.appHeaderButton}
        >
          <Plus />
          {"Create New"}
        </PolymorphButton>
      </Header>
      <div className={s.letters}></div>
    </div>
  );
};
