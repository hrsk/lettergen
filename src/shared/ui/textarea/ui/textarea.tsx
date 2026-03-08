import clsx from "clsx";
import { type ComponentPropsWithRef, type KeyboardEvent, type ReactNode } from "react";
import s from "./textarea.module.scss";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

type Properties = {
  label?: string;
  isError?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & ComponentPropsWithRef<"textarea">;

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
      <OverlayScrollbarsComponent
        className={clsx(s.overlayscrollbars, [isError && s.isError])}
        options={{ scrollbars: { theme: "os-theme-custom" } }}
      >
        <textarea
          data-overlayscrollbars-field
          onKeyDown={onKeyPressHandler}
          disabled={disabled}
          className={clsx(s.textarea, [isError && s.isError])}
          {...rest}
        />
      </OverlayScrollbarsComponent>
      {children}
    </div>
  );
};
