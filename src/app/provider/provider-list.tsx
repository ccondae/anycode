import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

import { GlobalStyleProvider } from "./global-styled-provider";
import { QueryProvider } from "./query-provider";

export const ProviderList = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <RecoilRoot>
        <GlobalStyleProvider />
        {children}
      </RecoilRoot>
    </QueryProvider>
  );
};
