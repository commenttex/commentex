import ReactCodeMirror, { EditorView } from "@uiw/react-codemirror";
import "./App.css";
import { latex } from "codemirror-lang-latex";

function App() {
  return (
    <div className="flex justify-center">
      
      <ReactCodeMirror
        className="min-w-3/4 max-w-3/4"
        extensions={[latex(), EditorView.lineWrapping]}
      ></ReactCodeMirror>
    </div>
  );
}

export default App;
