import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { QuestionListType } from "../model/question-list.type";
import { QUESTION_LIST_ENDPOINT, QUESTION_LIST_KEY } from "./question-list.key";

export const useQuestionListQuery = (
  category: string,
  page: number,
  language: number
): UseQueryResult<QuestionListType> => {
  const questionList = useQuery<QuestionListType>({
    queryKey: QUESTION_LIST_KEY.pagination({ category, size: 10, page, language }),
    queryFn: async () => {
      const response = await fetch(QUESTION_LIST_ENDPOINT.pagination({ category, size: 10, page, language }));
      const json = await response.json();
      return json;
    },
  });
  return questionList;
};
