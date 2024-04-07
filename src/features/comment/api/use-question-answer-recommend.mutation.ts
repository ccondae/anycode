import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { QuestionAnswerRecommendType } from "~/entities/comment";

import { useToast } from "~/shared/common-ui/toast";

export const useQuestionAnswerRecommendMutation = (): UseMutationResult<void, Error, QuestionAnswerRecommendType> => {
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: async (body: QuestionAnswerRecommendType) => {
      toast({ title: "준비중인 기능이에요!" });
      console.log(body);
    },
  });
  return mutation;
};
