import clsx from "clsx";

import Home from "@/assets/icons/svg/Home.svg?react";
import { PolymorphButton } from "@/shared/ui";
import { ApplicationsCounters } from "@/widgets/header/ui/applicationsCounter/applicationsCounter";
import { Link } from "react-router-dom";
import s from "./rightSide.module.scss";

type Properties = {
  goals: number;
  className?: string;
};
export const RightSide = ({ goals, className }: Properties) => {
  return (
    <div className={clsx(s.rightBlock, className)}>
      <ApplicationsCounters goals={goals} />
      <PolymorphButton
        as={Link}
        to={"/"}
        className={s.button}
      >
        <Home />
      </PolymorphButton>
    </div>
  );
};
