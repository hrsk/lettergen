import clsx from "clsx";

import Home from "@/assets/icons/svg/Home.svg?react";
import { PolymorphButton } from "@/shared";
import { ApplicationsCounters } from "@/widgets/header/ui/applicationsCounter/applicationsCounter";
import { Link } from "react-router-dom";
import s from "./rightSide.module.scss";

export const RightSide = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(s.rightBlock, className)}>
      <ApplicationsCounters />
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
