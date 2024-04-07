import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { CategoryType } from "../model/question.type";
import { CATEGORY_ENDPOINT, CATEGORY_KEY } from "./category.key";

export const useCategoryAllQuery = (): UseQueryResult<CategoryType[]> => {
  const categoryAll = useQuery<CategoryType[]>({
    queryKey: CATEGORY_KEY.findAll,
    queryFn: async () => {
      const response = await fetch(CATEGORY_ENDPOINT.findAll);
      return await response.json();
    },
  });
  return categoryAll;
};
