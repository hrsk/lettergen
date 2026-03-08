import clsx from "clsx";
import type { ComponentProps, ElementType, ReactNode } from "react";
import s from "./button.module.scss";

type Variant = "primary" | "secondary" | "outline" | "text";

type ButtonComponentOwnProperties<E extends ElementType = ElementType> = {
  children: ReactNode;
  as?: E;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
};

type EditableComponentProperties<E extends ElementType> = ButtonComponentOwnProperties<E> &
  Omit<ComponentProps<E>, keyof ButtonComponentOwnProperties>;

const __DEFAULT_ELEMENT__ = "button" as const;

export const Button = <E extends ElementType = typeof __DEFAULT_ELEMENT__>({
  as,
  children,
  disabled,
  variant,
  className,
  ...rest
}: EditableComponentProperties<E>) => {
  const Component = as || __DEFAULT_ELEMENT__;

  return (
    <Component
      className={clsx(s.button, s[`button--${variant}`], className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Component>
  );
};
