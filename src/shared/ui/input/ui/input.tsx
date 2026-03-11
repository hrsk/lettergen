import clsx from "clsx";
import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

export interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "search" | "email";
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProperties>(
  ({ type = "text", label, error, disabled, className, ...rest }, reference) => {
    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={reference}
          type={type}
          className={clsx(styles.input, [error && styles.isError])}
          disabled={disabled}
          {...rest}
        />
      </div>
    );
  },
);
