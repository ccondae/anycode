import { PropsWithChildren } from "react";

import { ErrorBoundary, Suspense } from "@suspensive/react";

import { GlobalErrorBoundary, GlobalLoading } from "~/shared/common-ui";

export const GlobalSuspenseBoundary = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<GlobalLoading />}>
      <ErrorBoundary fallback={<GlobalErrorBoundary />}>{children}</ErrorBoundary>
    </Suspense>
  );
};
