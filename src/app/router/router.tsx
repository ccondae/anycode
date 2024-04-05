import { createBrowserRouter } from "react-router-dom";

import { RootPage } from "~/pages/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
]);
