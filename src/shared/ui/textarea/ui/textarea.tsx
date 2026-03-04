import clsx from "clsx";
import { type ComponentPropsWithRef, type KeyboardEvent } from "react";
import s from "./textarea.module.scss";

type Properties = {
  label?: string;
  isError?: boolean;
  disabled?: boolean;
} & ComponentPropsWithRef<"textarea">;

/**
 *
 * - `label?` — метка над полем
 * - `isError?` — состояние ошибки
 *
 * Наследует пропсы `<textarea>`.
 */

export const Textarea = ({ label, isError = false, disabled, className, ...rest }: Properties) => {
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
      <span className={clsx(s.length, [isError && s.lengthError])}>0/1200</span>
    </div>
  );
};
