import { resolveAfterDelay } from "@/shared/utils";
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

type GenerateParameters = {
  job: string;
  company: string;
  skills: string;
  additional: string;
};

type FormState = {
  isLoading: boolean;
  letters: Letter[];

  generate: (parameters: GenerateParameters) => Promise<void>;
  deleteLetter: (letterId: string) => void;
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

export const useForm = create<FormState>()(
  persist(
    (set, get) => ({
      isLoading: false,
      letters: getLettersFromLocalStorage(),
      lettersCount: 0,

      generate: async ({ job, company, skills, additional }) => {
        set({ isLoading: true });

        await resolveAfterDelay(5000);

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
          letters: [...state.letters, { id: v1(), text: generatedLetter }],
        }));
      },
      deleteLetter: (letterId: string) => {
        return set((previous) => ({
          ...previous,
          letters: previous.letters.filter((letter) => letter.id !== letterId),
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

// export const useForm = create(() => ({
//   job: "" as string,
//   company: "" as string,
//   skills: "" as string,
//   additional: "" as string,
//   isLoading: false as boolean,
//   lettersCount: 0 as number,
//   letters: [] as Letter[],
// }));

// export const generate = async ({
//   job,
//   company,
//   skills,
//   additional,
// }: {
//   job: string;
//   company: string;
//   skills: string;
//   additional: string;
// }) => {
//   useForm.setState({ isLoading: true });
//   await resolveAfterDelay(5000).then(() => {
//     useForm.setState({ isLoading: false });
//   });

//   const generatedLetter: LetterText = {
//     title: `Dear ${company} Team,`,
//     company: `I am writing to express my interest in the ${job} position.`,
//     skills: `My experience in the realm combined with my skills in ${skills} make me a strong candidate for this role.`,
//     additional: `${additional.charAt(0).toUpperCase()}${additional.slice(1)}`,
//     other: `I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed
// organization.`,
//     thx: "Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.",
//   };

//   return useForm.setState((previous) => ({
//     ...previous,
//     letters: [...previous.letters, { id: v1(), text: generatedLetter }],
//     lettersCount: previous.lettersCount + 1,
//   }));
//   // return generatedLetter;
// };
// export const getLettersFromLocalStorage = (localStorageLetters: Letter[]) => {
//   return useForm.setState((previous) => ({
//     ...previous,
//     letters: [...previous.letters, ...localStorageLetters],
//     lettersCount: localStorageLetters.length,
//   }));
// };

// export const deleteLetter = (letterId: string) => {
//   return useForm.setState((previous) => ({
//     ...previous,
//     letters: previous.letters.filter((letter) => letter.id !== letterId),
//   }));
// };
