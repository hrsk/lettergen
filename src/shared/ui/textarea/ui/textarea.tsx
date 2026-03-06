// import clsx from "clsx";
// import { type ComponentPropsWithRef, type KeyboardEvent, type ReactNode } from "react";
// import s from "./textarea.module.scss";

// type Properties = {
//   label?: string;
//   isError?: boolean;
//   disabled?: boolean;
//   children: ReactNode;
// } & ComponentPropsWithRef<"textarea">;

// /**
//  *
//  * - `label?` — метка над полем
//  * - `isError?` — состояние ошибки
//  *
//  * Наследует пропсы `<textarea>`.
//  */

// export const Textarea = ({ label, isError, disabled, className, children, ...rest }: Properties) => {
//   const onKeyPressHandler = (event: KeyboardEvent) => {
//     const { key } = event;
//     if (key === "Enter") {
//       event.preventDefault();
//     }
//   };

//   return (
//     <div className={s.wrapper}>
//       {label && <label className={s.label}>{label}</label>}
//       <textarea
//         className={clsx(s.textarea, [isError && s.isError])}
//         disabled={disabled}
//         onKeyDown={onKeyPressHandler}
//         {...rest}
//       />
//       {children}
//     </div>
//   );
// };
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
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </textarea>
      </OverlayScrollbarsComponent>
      {children}
    </div>
  );
};
