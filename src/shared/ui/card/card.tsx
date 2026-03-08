import clsx from "clsx";
import { type ComponentProps } from "react";
import s from "./card.module.scss";

const Card = ({ className, size = "default", ...properties }: ComponentProps<"div"> & { size?: "default" | "sm" }) => {
  return (
    <div
      data-slot='card'
      data-size={size}
      className={clsx(s.letterCard, s[`letterCard--${size}`], className)}
      {...properties}
    />
  );
};

const CardHeader = ({ className, ...properties }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card-header'
      className={clsx(className)}
      {...properties}
    />
  );
};

const CardTitle = ({ className, ...properties }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card-title'
      className={clsx(className)}
      {...properties}
    />
  );
};

const CardContent = ({ className, ...properties }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card-content'
      className={clsx(s.cardContent, className)}
      {...properties}
    />
  );
};

const CardFooter = ({ className, ...properties }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card-footer'
      className={clsx(className)}
      {...properties}
    />
  );
};

export { Card, CardContent, CardFooter, CardHeader, CardTitle };
