import { ENV } from "~/shared/environment";

export const QUESTION_LIST_ENDPOINT = {
  // default: `${ENV.baseUrl}/api/question/page/popular`,
  pagination: (body: { category: string; size: number; page: number; language: number }) =>
    `${ENV.baseUrl}/api/question/${body.category}?categories=${body.language || ""}&size=${body.size}&page=${body.page}`,
};

export const QUESTION_LIST_KEY = {
  default: ["question-list"],
  pagination: (body: { category: string; size: number; page: number; language: number }) => {
    return [...QUESTION_LIST_KEY.default, body.category, body.size, body.page, body.language];
  },
};
