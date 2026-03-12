import { ApplicationsCounters } from "@/widgets/header/ui/applicationsCounter";
import { Link } from "react-router-dom";
import { ROUTES_PATHS } from "@/shared/config";
import { Button, Home } from "@hrsk/lettergen-ui-kit";
import clsx from "clsx";
import styles from "./rightSide.module.scss";

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
        iconOnly
        variant='outline'
      >
        <Home />
      </Button>
    </div>
  );
};
