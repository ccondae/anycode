import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import { vars } from "~/shared/common-ui/theme";
import { Toaster } from "~/shared/common-ui/toast";

import { GlobalStyleProvider } from "./global-styled-provider";
import { QueryProvider } from "./query-provider";

export const ProviderList = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <RecoilRoot>
        <ThemeProvider theme={vars}>
          <GlobalStyleProvider />
          <Toaster />
          {children}
        </ThemeProvider>
      </RecoilRoot>
    </QueryProvider>
  );
};
