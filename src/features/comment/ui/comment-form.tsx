import styled from "styled-components";

import Editor from "~/shared/common-ui/editor/editor";
import { useToast } from "~/shared/common-ui/toast";
import { useEditor } from "~/shared/hooks";

import { useCommentUploadContext } from "..";
import { useCommentUploadMutation } from "../api";

interface CommentFormProps {
  questionId: string;
}

export const CommentForm = ({ questionId }: CommentFormProps) => {
  const { ref, getResult } = useEditor();
  const { value, setValue } = useCommentUploadContext();

  const mutation = useCommentUploadMutation();
  const { toast } = useToast();

  const onSubmit = async () => {
    if (mutation.isPending) return;
    const userSubmitMarkdown = getResult();
    if (userSubmitMarkdown === null) return toast({ title: "답변 내용을 입력해주세요" });
    await mutation.mutateAsync({ questionId, content: userSubmitMarkdown });
    return toast({ title: "감사해요, 답변을 제출했어요" });
  };
  const editorOnChange = (event: string) => {
    setValue({ content: event });
  };

  return (
    <SRootContainer>
      <SQuestionAnswerFormBox>
        <STitle>당신의 답변을 써주세요</STitle>
        <SQuestionAnswerContent style={{ height: "400px" }}>
          <Editor ref={ref} markdown={value.content} onChange={editorOnChange} />
        </SQuestionAnswerContent>
      </SQuestionAnswerFormBox>
      <SButtonContainer>
        <SSubmitButton onClick={onSubmit}>등록하기</SSubmitButton>
      </SButtonContainer>
    </SRootContainer>
  );
};

const STitle = styled.div`
  width: 100%;
  padding-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSize.headline6};
  color: ${({ theme }) => theme.colors.black};
`;

const SQuestionAnswerFormBox = styled.section`
  background-color: white;
  padding-inline: 24px;
  padding-block: 20px;
`;

const SQuestionAnswerContent = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: "16px";
  border-top: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

const SSubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-inline: 40px;
  padding-block: 8px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  min-width: 182px;
  min-height: 44px;
  font-size: ${({ theme }) => theme.fontSize.subtitle1};
`;

const SRootContainer = styled.section`
  width: 100%;
`;
const SButtonContainer = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
