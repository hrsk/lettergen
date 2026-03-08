import { type ComponentPropsWithRef, type KeyboardEvent } from "react";
import clsx from "clsx";
import s from "./input.module.scss";

type Properties = {
  type?: "text" | "password" | "search" | "email";
  label?: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
} & ComponentPropsWithRef<"input">;

export const Input = ({ type = "text", label, error = false, disabled, className, ...rest }: Properties) => {
  const onKeyPressHandler = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className={s.wrapper}>
      {label && <label className={s.label}>{label}</label>}
      <input
        type={type}
        className={clsx(s.input, [error && s.isError])}
        disabled={disabled}
        onKeyDown={onKeyPressHandler}
        {...rest}
      />
    </div>
  );
};
