import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { DETAIL_ENDPOINT, DETAIL_KEY } from "./question-detail-key";
import { QuestionDetailType } from "./question-detail.type";

export const useDetailQuery = (id: string): UseQueryResult<QuestionDetailType> => {
  const Detail = useQuery<QuestionDetailType>({
    queryKey: DETAIL_KEY.finalDetail(id),
    queryFn: async () => {
      const response = await fetch(DETAIL_ENDPOINT.finalDetail(id));
      if (!response.ok) {
        throw new Error("Failed to fetch question detail");
      }
      return await response.json();
    },
  });
  return Detail;
};
