import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { CommentUpload } from "~/entities/comment";

import { ENV } from "~/shared/environment";

import { COMMENT_QUERY_KEY } from "./comment.key";

export const useCommentUploadMutation = (): UseMutationResult<void, Error, CommentUpload, unknown> => {
  const mutation = useMutation({
    mutationKey: COMMENT_QUERY_KEY.upload,
    mutationFn: async (body: CommentUpload) => {
      const response = await fetch(`${ENV.baseUrl}/api/comment/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error("response error");
      const result = await response.json();
      return result;
    },
  });
  return mutation;
};
