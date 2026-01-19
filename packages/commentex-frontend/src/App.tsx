
import ReactCodeMirror from '@uiw/react-codemirror'
import './App.css'
import { latex } from 'codemirror-lang-latex'

function App() {
  return (
    <>
      <ReactCodeMirror extensions={[latex()]}></ReactCodeMirror>
    </>
  )
}

export default App
