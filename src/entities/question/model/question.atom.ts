import { atom } from "recoil";

import { QuestionType } from "./question.type";

export const questionAtom = atom<QuestionType>({
  key: "question",
  default: {
    title: "",
    language: "",
    purpose: "",
    content: "",
  },
});
