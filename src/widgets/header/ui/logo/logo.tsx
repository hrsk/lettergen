import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styles from "./logo.module.scss";
import { ROUTES_PATHS } from "@/shared/config";
import { Logomark, Logotype } from "@hrsk/lettergen-ui-kit";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <NavLink
      to={ROUTES_PATHS.MAIN}
      className={clsx(styles.logo, className)}
    >
      <Logomark />
      <Logotype />
    </NavLink>
  );
};
