import { createBrowserRouter } from "react-router-dom";

import { QuestionPage } from "~/pages/question";
import QuestionWritePage from "~/pages/question/question-write.page";
import { RootPage } from "~/pages/root";

import {
  QuestionAnswerContextProvder,
  QuestionAnswerForm,
  QuestionAnswerRegisterSubmitButton,
} from "~/features/question-answer";

import { vars } from "~/shared/common-ui/theme";
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
  {
    path: "/progress",
    element: (
      <QuestionAnswerContextProvder>
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "60px",
          }}
        >
          <div
            style={{
              width: "768px",
              backgroundColor: vars.colors.like,
              paddingInline: "20px",
            }}
          >
            <QuestionAnswerForm />
            <QuestionAnswerRegisterSubmitButton />
          </div>
        </div>
      </QuestionAnswerContextProvder>
    ),
  },
]);
