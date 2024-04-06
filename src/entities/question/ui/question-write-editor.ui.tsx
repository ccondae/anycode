import { useRef, useState } from "react";
import styled from "styled-components";

import { MDXEditorMethods } from "@mdxeditor/editor";

import { WriteMarkdownType } from "~/features/question";

import Editor from "~/shared/common-ui/editor/editor";

const EditorContainer = styled.div`
  box-sizing: border-box;
  padding: 36px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  .mdxeditor {
    background-color: ${({ theme }) => theme.colors.white};
  }

  & div[role="toolbar"] {
    padding: 0;
    & ~ div {
      min-height: 80px;
    }
  }
`;

const Hr = styled.hr`
  box-sizing: border-box;
  margin: 16px 0;
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
`;

type WriteEditorProps = {
  title: string;
  type: WriteMarkdownType;
  hasFakePlaceholder?: boolean;
  markdown: string;
  setMarkdown: (str: string, name: WriteMarkdownType) => void;
};

export const QuestionWriteEditor = ({ title, type, hasFakePlaceholder, markdown, setMarkdown }: WriteEditorProps) => {
  const ref = useRef<MDXEditorMethods>(null);
  const [reset, setReset] = useState(hasFakePlaceholder);

  const handleChange = () => {
    if (ref.current) {
      if (typeof reset === "undefined" || !reset) setMarkdown(ref.current.getMarkdown(), type);
      else {
        setReset(false);
        const newValue = ref.current.getMarkdown().replace(/\./g, "").at(-1)?.trim() || "";
        setMarkdown(newValue, type);
        ref.current.setMarkdown("");
        ref.current.insertMarkdown(newValue);
      }
    }
  };
  return (
    <EditorContainer>
      <label>{title}</label>
      <Hr />
      <Editor ref={ref} markdown={markdown} onChange={handleChange} />
    </EditorContainer>
  );
};
