import { PropsWithChildren, useState } from "react";

import { contextGenerator } from "~/shared/hooks";

type CommentUploadBody = {
  content: string;
};

type CommentUploadContextType = {
  value: CommentUploadBody;
  setValue: (newState: Partial<CommentUploadBody>) => void;
};

const CommentUploadContext = contextGenerator<CommentUploadContextType>(null);

export const useCommentUploadContext = CommentUploadContext.useContext;

export const CommentUploadContextProvder = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<CommentUploadBody>({ content: "" });
  const setValue = (newState: Partial<CommentUploadBody>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <CommentUploadContext.Provider
      value={{
        value: state,
        setValue: setValue,
      }}
    >
      {children}
    </CommentUploadContext.Provider>
  );
};
