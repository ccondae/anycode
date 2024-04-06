import { useRef, useState } from "react";

import { MDXEditorMethods } from "@mdxeditor/editor";

import Editor from "~/shared/common-ui/editor/editor";

export const QuestionPage = () => {
  const ref = useRef<MDXEditorMethods>(null);
  const [markdown, setMarkdown] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const handleButton = () => {
    if (ref.current) {
      setContent(ref.current.getMarkdown());
    }
  };
  return (
    <div>
      <Editor ref={ref} onChange={(s) => setMarkdown(s)} markdown={markdown} />
      <button onClick={handleButton}>{"저장"}</button>
      {content}
    </div>
  );
};
