import { ENV } from "~/shared/environment";

export const QUESTION_WRTIE_ENDPOINT = {
  default: `${ENV.baseUrl}/api/question/upload`,
};

export const QUESTION_WRITE_KEY = {
  default: ["question-write"],
};
