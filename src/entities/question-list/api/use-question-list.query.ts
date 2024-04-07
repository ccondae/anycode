import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { QuestionListType } from "../model/question-list.type";
import { QUESTION_LIST_ENDPOINT, QUESTION_LIST_KEY } from "./question-list.key";

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

/*
 페이지네이션 쿼리가 반환해야할 내용

1. 다음으로 가기 함수
2. 이전으로 가기 함수
3. 특정페이지로 가기 함수
4. 현재 페이지에 대한 상태
5. useQuery에 대한 결과물

1 ~ 4는 매번 페이지네이션 필요할때마다 하드코딩하면 공수가 매우커지니까 한번에 처리해주면    좋을것같읍니다

주의해야할점
이전으로가기는 0미만으로 떨어지면안됩니다
다음으로가기는 다음페이지가 없으면 가면안됩니다
*/
