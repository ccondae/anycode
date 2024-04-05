import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

import { QueryProvider } from "./query-provider";

export const ProviderList = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </QueryProvider>
  );
};
