import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export const ProviderList = ({ children }: PropsWithChildren) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
