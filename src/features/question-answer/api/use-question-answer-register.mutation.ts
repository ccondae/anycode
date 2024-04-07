import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { QuestionAnswerRegisterType } from "~/entities/question-answer";

import { useToast } from "~/shared/common-ui/toast";

export const useQuestionAnswerRegisterMutation = (): UseMutationResult<
  void,
  Error,
  QuestionAnswerRegisterType,
  unknown
> => {
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: async (body: QuestionAnswerRegisterType) => {
      toast({ title: "준비중인 기능이에요!" });
      console.log(body);
    },
  });
  return mutation;
};
