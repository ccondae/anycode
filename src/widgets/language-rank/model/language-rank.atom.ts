import { atom } from "recoil";

export const languageState = atom<number>({
  key: "languageState",
  default: 0,
});
