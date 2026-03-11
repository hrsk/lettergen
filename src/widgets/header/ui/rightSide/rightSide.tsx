import clsx from "clsx";

import Home from "@/assets/icons/svg/Home.svg?react";
import { Button } from "@/shared/ui";
import { ApplicationsCounters } from "@/widgets/header/ui/applicationsCounter";
import { Link } from "react-router-dom";
import styles from "./rightSide.module.scss";
import { ROUTES_PATHS } from "@/shared/config";

type Properties = {
  className?: string;
};
export const RightSide = ({ className }: Properties) => {
  return (
    <div className={clsx(styles.rightBlock, className)}>
      <ApplicationsCounters />
      <Button
        as={Link}
        to={ROUTES_PATHS.MAIN}
        className={styles.button}
      >
        <Home />
      </Button>
    </div>
  );
};
