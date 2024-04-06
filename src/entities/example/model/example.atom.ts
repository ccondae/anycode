import { atom } from "recoil";

import { ExampleType } from "..";

export const exampleAtom = atom<ExampleType>({
  key: "example",
  default: { example: "" },
});
