import clsx from "clsx";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { forwardRef, type KeyboardEvent, type TextareaHTMLAttributes } from "react";
import styles from "./textarea.module.scss";

export interface TextareaProperties extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  disabled?: boolean;
  showCounter?: boolean;
  onEnter?: (event: KeyboardEvent) => void;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProperties>(
  ({ label, error, disabled, className, value, maxLength, showCounter = true, onEnter, ...rest }, reference) => {
    const currentLength = value ? String(value).length : 0;
    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <OverlayScrollbarsComponent
          className={clsx(styles.overlayscrollbars, [error && styles.isError])}
          options={{ scrollbars: { theme: "os-theme-custom" } }}
        >
          <textarea
            ref={reference}
            data-overlayscrollbars-field
            value={value}
            onKeyDown={onEnter}
            disabled={disabled}
            className={clsx(styles.textarea, [error && styles.isError])}
            {...rest}
          />
        </OverlayScrollbarsComponent>
        {showCounter && (
          <span className={clsx(styles.length, [error && styles.lengthError])}>
            {currentLength}
            {maxLength && ` / ${maxLength}`}
          </span>
        )}
      </div>
    );
  },
);
