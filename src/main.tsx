import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { GlobalSuspenseBoundary, ProviderList } from "~/app/provider";
import { router } from "~/app/router/router";
import "~/app/style/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderList>
      <GlobalSuspenseBoundary>
        <RouterProvider router={router} />
      </GlobalSuspenseBoundary>
    </ProviderList>
  </React.StrictMode>
);
