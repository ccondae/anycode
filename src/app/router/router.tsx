import { createBrowserRouter } from "react-router-dom";

import { RootPage } from "~/pages/root";
import { ROUTE } from "~/shared/route";
import { QuestionDetailPage } from "~/pages/question-detail-page/question-detail-page"

export const router = createBrowserRouter([
  {
    path: ROUTE.root,
    element: <RootPage />,
  },
  {
    path: ROUTE.detail,
    element: <QuestionDetailPage />
  }
]);
