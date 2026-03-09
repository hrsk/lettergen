import clsx from "clsx";
import { memo, type ComponentPropsWithRef, type KeyboardEvent, type ReactNode } from "react";
import s from "./textarea.module.scss";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

type Properties = {
  label?: string;
  isError?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onEnter?: (event: KeyboardEvent) => void;
} & ComponentPropsWithRef<"textarea">;

export const Textarea = memo(({ label, isError, disabled, className, children, onEnter, ...rest }: Properties) => {
  return (
    <div className={s.wrapper}>
      {label && <label className={s.label}>{label}</label>}
      <OverlayScrollbarsComponent
        className={clsx(s.overlayscrollbars, [isError && s.isError])}
        options={{ scrollbars: { theme: "os-theme-custom" } }}
      >
        <textarea
          data-overlayscrollbars-field
          onKeyDown={onEnter}
          disabled={disabled}
          className={clsx(s.textarea, [isError && s.isError])}
          {...rest}
        />
      </OverlayScrollbarsComponent>
      {children}
    </div>
  );
});
