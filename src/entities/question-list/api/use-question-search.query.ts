import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { QuestionListContent } from "../model/question-list.type";
import { QUESTION_SEARCH_ENDPOINT, QUESTION_SEARCH_KEY } from "./question-search.key";

export const useQuestionSearchQuery = (term: string): UseQueryResult<QuestionListContent[]> => {
  const questionList = useQuery<QuestionListContent[]>({
    queryKey: QUESTION_SEARCH_KEY.search(term),
    queryFn: async () => {
      const response = await fetch(QUESTION_SEARCH_ENDPOINT.search(term));
      const json = await response.json();

      return json;
    },
  });

  return questionList;
};
