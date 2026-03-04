import Copy from "@/assets/icons/svg/Copy.svg?react";
import Delete from "@/assets/icons/svg/Trash.svg?react";
import s from "./card.module.scss";

export const Card = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className={s.letterCard}>
      <div className={s.cardContent}>
        <p>{title}</p>
        <p className={s.last}>{text}</p>
        <span></span>
      </div>
      <div className={s.cardFooter}>
        <button className={s.button}>
          <Delete />
          Delete
        </button>
        <button className={s.button}>
          Copy to clipboard
          <Copy />
        </button>
      </div>
    </div>
  );
};
