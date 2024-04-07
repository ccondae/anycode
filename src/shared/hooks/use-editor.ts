import { useRef } from "react";

import { MDXEditorMethods } from "@mdxeditor/editor";

export const useEditor = () => {
  const ref = useRef<MDXEditorMethods>(null);
  const getResult = () => {
    if (ref.current) {
      return ref.current.getMarkdown();
    }
    return null;
  };
  return { ref, getResult };
};
