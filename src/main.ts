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

  // コード検索ボタン
  let discoverButton = document.getElementById("discover_button")
  discoverButton.addEventListener("click", () => {
    window.location.href = "../discover.html"
  })

  // 保存ボタン
  let saveButton = document.getElementById("save_button")
  saveButton.addEventListener("click", () => {
    var modal = document.getElementById('save_modal');
    modal.style.display = 'block';

  })

  // キャンセルボタン
  var cancelButton = document.getElementById('cancel_button');
  cancelButton.addEventListener('click', function() {
    var modal = document.getElementById('save_modal');
    modal.style.display = 'none';
  })

  // 登録ボタン
  var registerButton = document.getElementById("register_button")
  registerButton.addEventListener("click", () => {
    let titleBox = <HTMLTextAreaElement>document.getElementById("title_textbox")
    let discriptionBox = <HTMLTextAreaElement>document.getElementById("discription_textbox")
    let editorText = editor.getValue()

    const data = {
      title: titleBox.value,
      discription: discriptionBox.value,
      snipet: editorText
    };

    let body = JSON.stringify(data);

    fetch('./api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body })

    var modal = document.getElementById('save_modal');
    modal.style.display = 'none';
  })
}

main()
