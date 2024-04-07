import { useState } from "react";
import styled from "styled-components";

import Editor from "~/shared/common-ui/editor/editor";
import { useEditor } from "~/shared/hooks";

const SInput = styled.input`
  width: 100%;
  border: none;
  padding-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSize.headline6};
  color: ${({ theme }) => theme.colors.black};
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
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

export const QuestionAnswerForm = () => {
  const { ref } = useEditor();
  const [markdown, setMarkdown] = useState("");
  return (
    <SQuestionAnswerFormBox>
      <form>
        <SInput placeholder="당신의 답변을 써주세요." />
        <SQuestionAnswerContent
          style={{
            height: "768px",
          }}
        >
          <Editor
            ref={ref}
            markdown={markdown}
            onChange={(e) => {
              setMarkdown(e);
            }}
          />
        </SQuestionAnswerContent>
      </form>
    </SQuestionAnswerFormBox>
  );
};
