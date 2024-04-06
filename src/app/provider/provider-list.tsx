import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

import { Toaster } from "~/shared/common-ui/toast";

import { GlobalStyleProvider } from "./global-styled-provider";
import { QueryProvider } from "./query-provider";

export const ProviderList = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <RecoilRoot>
        <GlobalStyleProvider />
        <Toaster />
        {children}
      </RecoilRoot>
    </QueryProvider>
  );
};
