import { useLetter, type Letter, type LetterText } from "@/features/ui/generate-form";
import { Button, Card, CardContent, CardFooter } from "@/shared/ui";

import { useEffect, useState } from "react";
import Copy from "@/assets/icons/svg/Copy.svg?react";
import Delete from "@/assets/icons/svg/Trash.svg?react";
import styles from "./letter-preview.module.scss";

type Properties = { letter: Letter };
export const LetterPreview = ({ letter }: Properties) => {
  const { deleteLetter } = useLetter();

  const letterText = Object.entries(letter.text || ({} as LetterText));

  const [copy, setCopy] = useState<boolean>(false);

  useEffect(() => {
    const timerID = setTimeout(() => setCopy(false), 1500);
    return () => clearTimeout(timerID);
  }, [copy]);

  const copyToClipboard = async (copyText: LetterText) => {
    await navigator.clipboard.writeText(Object.values(copyText).join(" "));
    setCopy(true);
  };

  return (
    <Card size='sm'>
      <CardContent>
        {letterText.map(([key, value]) => (
          <p key={key}>{value}</p>
        ))}
      </CardContent>
      <CardFooter className={styles.cardFooter}>
        <Button
          variant='text'
          onClick={() => deleteLetter(letter.id)}
        >
          <Delete />
          Delete
        </Button>
        <Button
          variant='text'
          onClick={() => copyToClipboard(letter.text)}
        >
          {copy ? "Copied" : "Copy to clipboard"}
          <Copy />
        </Button>
      </CardFooter>
    </Card>
  );
};
