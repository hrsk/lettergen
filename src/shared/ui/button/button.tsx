import clsx from "clsx";
import type { ComponentProps, ElementType, ReactNode } from "react";
import Loading from "@/assets/icons/svg/Loading.svg?react";
import styles from "./button.module.scss";

type Variant = "primary" | "secondary" | "outline" | "text";

type ButtonComponentOwnProperties<E extends ElementType = ElementType> = {
  children: ReactNode;
  as?: E;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type EditableComponentProperties<E extends ElementType> = ButtonComponentOwnProperties<E> &
  Omit<ComponentProps<E>, keyof ButtonComponentOwnProperties>;

const __DEFAULT_ELEMENT__ = "button" as const;

export const Button = <E extends ElementType = typeof __DEFAULT_ELEMENT__>({
  as,
  children,
  disabled,
  variant,
  leftIcon,
  rightIcon,
  isLoading,
  className,
  ...rest
}: EditableComponentProperties<E>) => {
  const Component = as || __DEFAULT_ELEMENT__;

  return (
    <Component
      className={clsx(styles.button, styles[`button--${variant}`], [isLoading && styles.loadingButton], className)}
      disabled={disabled}
      {...rest}
    >
      {isLoading && <Loading />}

      <span className={clsx(styles.content, [isLoading && styles.contentHidden])}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}

        {children}

        {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
      </span>
    </Component>
  );
};
