import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import {
  BoldItalicUnderlineToggles,
  ChangeCodeMirrorLanguage,
  ConditionalContents,
  InsertCodeBlock,
  InsertSandpack,
  InsertTable,
  MDXEditor,
  SandpackConfig,
  ShowSandpackInfo,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  sandpackPlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

const defaultSnippetContent = `
const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
export default App;
`.trim();

const simpleSandpackConfig: SandpackConfig = {
  defaultPreset: "react",
  presets: [
    {
      label: "React",
      name: "react",
      meta: "live react",
      sandpackTemplate: "react",
      sandpackTheme: "light",
      snippetFileName: "/App.js",
      snippetLanguage: "jsx",
      initialSnippetContent: defaultSnippetContent,
    },
  ],
};

/*
  props
  ref
  현재 페이지에 보여질 상태 // 
  변경할 setter함수
  
*/

type EditorProps = {
  markdown: string;
  onChange?: (str: string) => void;
};

const Editor = forwardRef<ElementRef<typeof MDXEditor>, ComponentPropsWithoutRef<typeof MDXEditor> & EditorProps>(
  ({ markdown, onChange }, ref) => {
    return (
      <MDXEditor
        ref={ref}
        markdown={markdown}
        onChange={onChange}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <InsertTable />
                <ConditionalContents
                  options={[
                    {
                      when: (editor) => editor?.editorType === "codeblock",
                      contents: () => <ChangeCodeMirrorLanguage />,
                    },
                    { when: (editor) => editor?.editorType === "sandpack", contents: () => <ShowSandpackInfo /> },
                    {
                      fallback: () => (
                        <>
                          <InsertCodeBlock />
                          <InsertSandpack />
                        </>
                      ),
                    },
                  ]}
                />
              </>
            ),
          }),
          codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
          sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
          codeMirrorPlugin({ codeBlockLanguages: { js: "JavaScript", css: "CSS", java: "Java" } }),
          headingsPlugin(),
          listsPlugin(),
          tablePlugin(),
          linkPlugin(),
          quotePlugin(),
          markdownShortcutPlugin(),
          thematicBreakPlugin(),
        ]}
      />
    );
  }
);

Editor.displayName = "editor";

export default Editor;
