import { createBrowserRouter } from "react-router-dom";

import { QuestionPage } from "~/pages/question";
import QuestionWritePage from "~/pages/question/question-write.page";
import { RootPage } from "~/pages/root";

import { ROUTE } from "~/shared/route";

export const router = createBrowserRouter([
  {
    path: ROUTE.root,
    element: <RootPage />,
  },
  {
    path: ROUTE.question,
    element: <QuestionPage />,
  },
  {
    path: ROUTE.questionWrite,
    element: <QuestionWritePage />,
  },
]);
