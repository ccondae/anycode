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

export const QuestionAnswerForm = () => {
  const { ref } = useEditor();
  const [markdown, setMarkdown] = useState("");
  return (
    <SQuestionAnswerFormBox>
      <form>
        <SInput placeholder="당신의 답변을 써주세요." />
        <div
          className=""
          style={{
            height: "768px",
            backgroundColor: "white",
          }}
        >
          <Editor
            ref={ref}
            markdown={markdown}
            onChange={(e) => {
              setMarkdown(e);
            }}
          />
        </div>
      </form>
    </SQuestionAnswerFormBox>
  );
};
