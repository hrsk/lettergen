import clsx from "clsx";
import { memo, type ComponentPropsWithRef } from "react";
import s from "./input.module.scss";

type Properties = {
  type?: "text" | "password" | "search" | "email";
  label?: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
} & ComponentPropsWithRef<"input">;

export const Input = memo(({ type = "text", label, error = false, disabled, className, ...rest }: Properties) => {
  return (
    <div className={s.wrapper}>
      {label && <label className={s.label}>{label}</label>}
      <input
        type={type}
        className={clsx(s.input, [error && s.isError])}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
});
