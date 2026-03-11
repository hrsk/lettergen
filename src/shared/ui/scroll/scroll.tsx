import type { ReactNode } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import styles from "./scroll.module.scss";

export const Scroll = ({ children }: { children: ReactNode }) => (
  <ScrollArea.Root className={styles.root}>
    <ScrollArea.Viewport className={styles.viewport}>{children}</ScrollArea.Viewport>
    <ScrollArea.Scrollbar
      className={styles.scrollbar}
      orientation='vertical'
    >
      <ScrollArea.Thumb className={styles.thumb} />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>
);
