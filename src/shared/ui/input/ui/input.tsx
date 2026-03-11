import clsx from "clsx";
import { memo, type ComponentPropsWithRef } from "react";
import styles from "./input.module.scss";

type Properties = {
  type?: "text" | "password" | "search" | "email";
  label?: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
} & ComponentPropsWithRef<"input">;

export const Input = memo(({ type = "text", label, error = false, disabled, className, ...rest }: Properties) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        className={clsx(styles.input, [error && styles.isError])}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
});
