import * as monaco from "monaco-editor"
import { CanvasMode } from "./main/CanvasMode"
const cv = require("./opencv.js")

// キャンバスを切り替える
function changeCanvas(mode: CanvasMode) {
    let singleCanvas = document.getElementById("canvas_area_single")
    let doubleCanvas = document.getElementById("canvas_area_double")

    switch (mode) {
        case CanvasMode.Single:
            singleCanvas.hidden = false
            doubleCanvas.hidden = true
            break
        case CanvasMode.Double:
            singleCanvas.hidden = true
            doubleCanvas.hidden = false
            break
    }
}

function main() {

    // タイトル
    let title = document.getElementById("title_text")
    title.addEventListener("mouseover", () => {
        title.style.cursor = "default"
    })

    // バージョン
    let version = document.getElementById("title_version")
    version.addEventListener("mouseover", () => {
        version.style.cursor = "default"
    })

    // ヘッダーアイテム
    let headerSingle = document.getElementById("canvas_area_header_item_single")
    headerSingle.addEventListener("mouseover", () => {
        headerSingle.style.cursor = "pointer"
    })

    headerSingle.addEventListener("click", () => {
        changeCanvas(CanvasMode.Single)
    })

    let headerDouble = document.getElementById("canvas_area_header_item_double")
    headerDouble.addEventListener("mouseover", () => {
        headerDouble.style.cursor = "pointer"
    })

    headerDouble.addEventListener("click", () => {
        changeCanvas(CanvasMode.Double)
    })

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
          language: 'javascript',
          automaticLayout: true
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

    let promise = fetch('./api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body })

    var modal = document.getElementById('save_modal');
    modal.style.display = 'none';

    promise.then(() => {
        // 保存が完了したとき
        var nModal = document.getElementById('notification_modal')
        nModal.style.display = 'block'

        nModal.onclick = () => {
          nModal.style.display = 'none'
        }
    })
  })

  // クエリが存在するとき
  var query = location.search
  if (query.length > 0) {
    var value = query.split('=')
    let id = decodeURIComponent(value[1])
    const data = { query: id }
    let body = JSON.stringify(data)
    let promise = fetch('./api/findbyid', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body })

    promise.then(async (resolve) => {
      let body = await resolve.json()
      console.log(body)
      let b = body[0]
      editor.setValue(b.snipet)
    })
  }

  let documentButton = document.getElementById("documentation_button")
  documentButton.addEventListener("click", () => {
    window.location.href = "../documentation.html"
  })
}

main()
