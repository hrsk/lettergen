import { delayPromise } from "@/shared/utils";
import { v1 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type LetterText = {
  title: string;
  company: string;
  skills: string;
  additional: string;
  other: string;
  thx: string;
};

export type Letter = {
  id: string;
  text: LetterText;
};

export type GenerateParameters = {
  job: string;
  company: string;
  skills: string;
  additional: string;
};

type LetterState = {
  isLoading: boolean;
  isCreated: boolean;
  letters: Letter[];

  generate: (parameters: GenerateParameters) => Promise<void>;
  tryAgain: (parameters: GenerateParameters) => Promise<void>;
  deleteLetter: (letterId: string) => void;
  resetLetter: (isCreate: boolean) => void;
};
const getLettersFromLocalStorage = () => {
  try {
    const localStorageItems = JSON.parse(localStorage.getItem("letters") || "[]") as Letter[];
    return localStorageItems;
  } catch {
    localStorage.setItem("letters", "[]");
  }
  return [];
};

export const useLetter = create<LetterState>()(
  persist(
    (set) => ({
      isLoading: false,
      letters: getLettersFromLocalStorage(),
      isCreated: false,

      generate: async ({ job, company, skills, additional }) => {
        set({ isLoading: true });

        await delayPromise(2000);

        const generatedLetter: LetterText = {
          title: `Dear ${company} Team,`,
          company: `I am writing to express my interest in the ${job} position.`,
          skills: String.raw`My experience in the realm combined with my skills in ${skills}
          make me a strong candidate for this role.`,
          additional: `${additional.charAt(0).toUpperCase()}${additional.slice(1)}`,
          other:
            "I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.",
          thx: "Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.",
        };

        set((state) => ({
          isLoading: false,
          isCreated: true,
          letters: [...state.letters, { id: v1(), text: generatedLetter }],
        }));
      },
      deleteLetter: (letterId: string) => {
        return set((previous) => ({
          ...previous,
          letters: previous.letters.filter((letter) => letter.id !== letterId),
        }));
      },
      resetLetter: (isCreated) => {
        set({ isCreated });
      },
      tryAgain: async ({ job, company, skills, additional }) => {
        set({ isLoading: true });

        await delayPromise(2000);

        const generatedLetter: LetterText = {
          title: `Dear ${company} Team,`,
          company: `I am writing to express my interest in the ${job} position.`,
          skills: String.raw`My experience in the realm combined with my skills in ${skills}
          make me a strong candidate for this role.`,
          additional: `${additional.charAt(0).toUpperCase()}${additional.slice(1)}`,
          other:
            "I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.",
          thx: "Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.",
        };

        set((state) => ({
          isLoading: false,
          isCreated: true,
          letters: [...state.letters.slice(0, -1), { id: v1(), text: generatedLetter }],
        }));
      },
    }),
    {
      name: "letters",
      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        letters: state.letters,
      }),
    },
  ),
);
