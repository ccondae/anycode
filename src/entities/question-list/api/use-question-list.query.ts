import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { QuestionListType } from "../model/question-list.type";
import { QUESTION_LIST_ENDPOINT, QUESTION_LIST_KEY } from "./question-list.key";

// Todo: 현재는 "popular"로 고정되어있지만, 추후에는 인자로 받아서 사용할 수 있도록 변경해야합니다.
// "전체","답변된 질문","답변되지 않은 질문" 등등..
export const useQuestionListQuery = (page: number): UseQueryResult<QuestionListType> => {
  const questionList = useQuery<QuestionListType>({
    queryKey: QUESTION_LIST_KEY.pagination({ size: 10, page }),
    queryFn: async () => {
      const response = await fetch(QUESTION_LIST_ENDPOINT.pagination({ size: 10, page }), { method: "POST" });
      const json = await response.json();
      return json;
    },
  });
  return questionList;
};
