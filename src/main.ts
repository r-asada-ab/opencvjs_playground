import * as monaco from "monaco-editor"
const cv = require("./opencv.js");
console.log(cv)

function main() {
  // ドロップエリア
  let dropArea = document.getElementById("drop_area")

  dropArea!!.addEventListener('dragover', (event: DragEvent) => {
    event.preventDefault();
  })

  dropArea!!.addEventListener('drop', (event: DragEvent) => {
    event.stopPropagation()
    event.preventDefault()
    const file = event!!.dataTransfer!!.files[0]
    let url = URL.createObjectURL(file)

    let image = <HTMLImageElement>document.getElementById("preview")
    image.src = url
  })

  // エディター
  var monacoEditorContainer = document.getElementById("editor");
  let editor: monaco.editor.IStandaloneCodeEditor
  if (monacoEditorContainer) {
      monaco.editor.setTheme("vs-dark")
      editor = monaco.editor.create(monacoEditorContainer, {
          value: 'console.log("Hello, world")',
          language: 'javascript'
      });
  }

  // 実行ボタン
  let runButton = document.getElementById("run_button")
  runButton.addEventListener("click", async () => {
    let v = editor.getValue()
    console.log(v)
    let func = new Function("cv", v)
    console.log(func)
    func(cv)
  })
}

main()
