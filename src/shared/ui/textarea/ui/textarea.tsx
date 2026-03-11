import clsx from "clsx";
import { memo, type ComponentPropsWithRef, type KeyboardEvent, type ReactNode } from "react";
import styles from "./textarea.module.scss";
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
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <OverlayScrollbarsComponent
        className={clsx(styles.overlayscrollbars, [isError && styles.isError])}
        options={{ scrollbars: { theme: "os-theme-custom" } }}
      >
        <textarea
          data-overlayscrollbars-field
          onKeyDown={onEnter}
          disabled={disabled}
          className={clsx(styles.textarea, [isError && styles.isError])}
          {...rest}
        />
      </OverlayScrollbarsComponent>
      {children}
    </div>
  );
});
