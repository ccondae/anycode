import { ENV } from "~/shared/environment";

export const QUESTION_SEARCH_ENDPOINT = {
  search: (term: string) => `${ENV.baseUrl}/api/question/search/${term}`,
};

export const QUESTION_SEARCH_KEY = {
  search: (term: string) => ["search", term],
};
