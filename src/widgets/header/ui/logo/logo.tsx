import clsx from "clsx";

import Logomark from "@/assets/icons/svg/Logomark.svg?react";
import Logotype from "@/assets/icons/svg/Logotype.svg?react";
import { NavLink } from "react-router-dom";
import s from "./logo.module.scss";
import { ROUTES_PATHS } from "@/shared/config";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <NavLink
      to={ROUTES_PATHS.MAIN}
      className={clsx(s.logo, className)}
    >
      <Logomark />
      <Logotype />
    </NavLink>
  );
};
