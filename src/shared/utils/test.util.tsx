import { RecoilRoot } from "recoil";

import { Suspense } from "@suspensive/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => (
    <Suspense fallback={<div role="textbox">loading</div>}>
      <QueryClientProvider client={testQueryClient}>
        <RecoilRoot>{children}</RecoilRoot>
      </QueryClientProvider>
    </Suspense>
  );
}
