import { atom } from "recoil";

import { QuestionWriteType } from "./question.type";

export const questionAtom = atom<QuestionWriteType>({
  key: "question",
  default: { title: "", githubUrl: "", content: "", code: "", categoryIds: [], purpose: "" },
});
