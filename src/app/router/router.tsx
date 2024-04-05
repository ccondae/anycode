import { createBrowserRouter } from "react-router-dom";

import { RootPage } from "~/pages/root";

import { ROUTE } from "~/shared/route";

export const router = createBrowserRouter([
  {
    path: ROUTE.root,
    element: <RootPage />,
  },
]);
