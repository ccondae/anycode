import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { QuestionWriteResultType } from "../model/question.type";
import { QUESTION_WRITE_KEY, QUESTION_WRTIE_ENDPOINT } from "./question-write.key";

export const useQuestionWriteMutation = (): UseMutationResult<QuestionWriteResultType> => {
  const questionWrite = useMutation<QuestionWriteResultType, Error, unknown, void>({
    mutationKey: QUESTION_WRITE_KEY.default,
    mutationFn: async (questionWrite) => {
      const response = await fetch(QUESTION_WRTIE_ENDPOINT.default, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(questionWrite),
      });
      return await response.json();
    },
  });
  return questionWrite;
};
