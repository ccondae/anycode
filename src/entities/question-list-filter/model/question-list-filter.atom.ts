import { atom } from "recoil";

import { Category } from "./question-list-filter.type";

export const categoryState = atom<Category>({
  key: "categoryState",
  default: "popular",
});
