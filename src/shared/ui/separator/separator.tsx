import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./separator.module.scss";

type Properties = ComponentPropsWithoutRef<"div"> & {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
};

export const Separator = ({ orientation = "horizontal", decorative, className, ...properties }: Properties) => {
  return (
    <div
      role={decorative ? "presentation" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      data-orientation={orientation}
      className={clsx(s.root, className)}
      {...properties}
    />
  );
};
