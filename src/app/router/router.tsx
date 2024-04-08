import { createBrowserRouter } from "react-router-dom";

import { QuestionPage } from "~/pages/question";
import QuestionWritePage from "~/pages/question/question-write.page";
import { ReumiPage } from "~/pages/reumi";
import { RootPage } from "~/pages/root";

import { CommonLayout } from "~/widgets/common-layout";

import { ROUTE } from "~/shared/route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      { path: ROUTE.root, element: <RootPage /> },
      { path: ROUTE.question, element: <QuestionPage /> },
      { path: ROUTE.questionWrite, element: <QuestionWritePage /> },
      { path: ROUTE.reumi, element: <ReumiPage /> },
    ],
  },
]);
