import { Button, Card, CardContent, CardFooter, Copy, Ellipse } from "@hrsk/lettergen-ui-kit";
import { useLetter, type LetterText } from "@/features/ui/generate-form/model/letterStore";
import clsx from "clsx";
import { useEffect, useState } from "react";

import styles from "./letter-output.module.scss";

export const LetterOutput = () => {
  const { letters, isLoading } = useLetter();
  const [copy, setCopy] = useState<boolean>(false);

  const letterText = Object.entries(letters.at(-1)?.text || ({} as LetterText));

  useEffect(() => {
    const timerID = setTimeout(() => setCopy(false), 1500);
    return () => clearTimeout(timerID);
  }, [copy]);

  const copyToClipboard = async (copyText: LetterText | undefined) => {
    if (!copyText) return;
    await navigator.clipboard.writeText(Object.values(copyText).join(" "));
    setCopy(true);
  };

  if (isLoading) {
    return (
      <article className={styles.loading}>
        <Ellipse
          width={80}
          height={80}
        />
      </article>
    );
  }

  if (letters.length === 0) {
    return (
      <article className={clsx([styles.letterWrapper])}>
        <p>Your personalized job application will appear here...</p>
      </article>
    );
  }

  return (
    <Card>
      <CardContent className={styles.content}>
        <div className={styles.scrollbar}>
          {letterText.map(([key, value]) => (
            <p key={key}>{value}</p>
          ))}
        </div>
      </CardContent>
      <CardFooter className={styles.buttonsWrapper}>
        <Button
          variant='text'
          onClick={() => copyToClipboard(letters.at(-1)?.text)}
        >
          {copy ? "Copied" : "Copy to clipboard"}
          <Copy />
        </Button>
      </CardFooter>
    </Card>
  );
};
