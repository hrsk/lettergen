import clsx from "clsx";
import { type ComponentPropsWithRef, type KeyboardEvent, type ReactNode } from "react";
import s from "./textarea.module.scss";

type Properties = {
  label?: string;
  isError?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & ComponentPropsWithRef<"textarea">;

/**
 *
 * - `label?` — метка над полем
 * - `isError?` — состояние ошибки
 *
 * Наследует пропсы `<textarea>`.
 */

export const Textarea = ({ label, isError, disabled, className, children, ...rest }: Properties) => {
  const onKeyPressHandler = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className={s.wrapper}>
      {label && <label className={s.label}>{label}</label>}
      <textarea
        className={clsx(s.textarea, [isError && s.isError])}
        disabled={disabled}
        onKeyDown={onKeyPressHandler}
        {...rest}
      />
      {children}
    </div>
  );
};
