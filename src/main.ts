import * as monaco from "monaco-editor"

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
  if (monacoEditorContainer) {
      monaco.editor.create(monacoEditorContainer, {
          value: 'console.log("Hello, world")',
          language: 'javascript'
      });
  }
}

main()
