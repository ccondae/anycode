import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { LanguageRankType } from "../model/language-rank.type";
import { LANGUAGE_RANK_ENDPOINT, LANGUAGE_RANK_KEY } from "./language-rank.key";

export const useLanguageRankQuery = (): UseQueryResult<LanguageRankType[]> => {
  const languageRank = useQuery<LanguageRankType[]>({
    queryKey: LANGUAGE_RANK_KEY,
    queryFn: async () => {
      const response = await fetch(LANGUAGE_RANK_ENDPOINT);
      const json = await response.json();
      return json;
    },
  });
  return languageRank;
};
