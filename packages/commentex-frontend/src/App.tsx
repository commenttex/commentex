import { useRef, useCallback } from "react";
import "./App.css";
import { Editor, loader } from "@monaco-editor/react";
import type { editor as MonacoEditor } from "monaco-editor";
import { registerLaTeXLanguage } from "monaco-latex";
import { testval } from "./testVal";
import { Comment } from "./components/Comment";
import { createRoot } from "react-dom/client";

// LaTeX Sprache für Monaco registrieren
loader.init().then((monaco) => {
  registerLaTeXLanguage(monaco);
});

function App() {
  const editorRef = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const widgetRef = useRef<MonacoEditor.IContentWidget | null>(null);
  const widgetPositionRef = useRef<MonacoEditor.IPosition | null>(null);

  const createContentWidget = (): MonacoEditor.IContentWidget => {
    const domNode = document.createElement("div");
    const root = createRoot(domNode);
    root.render(<Comment />);
    domNode.style.zIndex = "1000";

    return {
      getId: () => "commentex.widget.comment",
      getDomNode: () => domNode,
      getPosition: () => {
        if (!widgetPositionRef.current || !monacoRef.current) return null;
        return {
          position: widgetPositionRef.current,
          preference: [
            monacoRef.current.editor.ContentWidgetPositionPreference.ABOVE,
            monacoRef.current.editor.ContentWidgetPositionPreference.BELOW,
          ],
        };
      },
    };
  };

  const handleSelectionChange = useCallback((event: any) => {
    const selection = event.selection;
    if (selection) {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        const from = selection.getStartPosition();
        const to = selection.getEndPosition();

        if (from.lineNumber !== to.lineNumber || from.column !== to.column) {
          const selectedText = editorRef.current
            ?.getModel()
            ?.getValueInRange(selection);

          console.log(selectedText);
          console.log("Range:", from, to);

          widgetPositionRef.current = from;

          if (widgetRef.current) {
            editorRef.current?.removeContentWidget(widgetRef.current);
          }
          widgetRef.current = createContentWidget();
          editorRef.current?.addContentWidget(widgetRef.current);
        } else {
          if (widgetRef.current) {
            editorRef.current?.removeContentWidget(widgetRef.current);
            widgetRef.current = null;
          }
        }
      }, 300);
    }
  }, []);

  return (
    <div className="flex justify-center">
      <Editor
        defaultValue={testval}
        className="min-w-3/4 max-w-3/4"
        height="100vh"
        defaultLanguage="latex"
        options={{
          wordWrap: "on",
        }}
        onMount={(
          editor: MonacoEditor.IStandaloneCodeEditor,
          monaco: Monaco,
        ) => {
          editorRef.current = editor;
          monacoRef.current = monaco;
          editor.onDidChangeCursorSelection(handleSelectionChange);
        }}
      ></Editor>
    </div>
  );
}

export default App;
