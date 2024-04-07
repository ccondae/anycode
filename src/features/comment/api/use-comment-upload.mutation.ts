import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { CommentUpload } from "~/entities/comment";

import { useToast } from "~/shared/common-ui/toast";

export const useCommentUploadMutation = (): UseMutationResult<void, Error, CommentUpload, unknown> => {
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: async (body: CommentUpload) => {
      toast({ title: "준비중인 기능이에요!" });
      console.log(body);
    },
  });
  return mutation;
};
