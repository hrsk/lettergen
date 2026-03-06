import { type ComponentPropsWithRef, type KeyboardEvent } from "react";
import clsx from "clsx";
import s from "./input.module.scss";

type Properties = {
  type?: "text" | "password" | "search" | "email";
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
} & ComponentPropsWithRef<"input">;

/**
 * - `type?` — тип поля ввода (`'text'`, `'password'`, `'search'`, `'email'`)
 * - `label?` — метка над полем
 * - `error?` — сообщение об ошибке
 * - `disabled?` — отключает поле
 *
 * Наследует все пропсы `<input>`.
 */

export const Input = ({ type = "text", label, error, disabled, className, ...rest }: Properties) => {
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
        className={clsx(s.input)}
        disabled={disabled}
        onKeyDown={onKeyPressHandler}
        {...rest}
      />
    </div>
  );
};
