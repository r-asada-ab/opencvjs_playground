import * as monaco from "monaco-editor"
import { PlaygroundCanvas } from "./main/PlaygroundCanvas"
import NotificationModal from "./NotificationModal"
const cv = require("./opencv.js")

// プレイグラウンドキャンバス
let playgroundCanvas = new PlaygroundCanvas()

// ドロップを有効にする
function enableDrop(imgElemntId: string) {
    let image = <HTMLImageElement>document.getElementById(imgElemntId)
    if (image == null) {
        return
    }

    image.addEventListener('dragover', (event: DragEvent) => {
      event.preventDefault();
    })

    image.addEventListener('drop', (event: DragEvent) => {
      event.stopPropagation()
      event.preventDefault()
      const file = event!!.dataTransfer!!.files[0]
      let url = URL.createObjectURL(file)
      image.src = url
      image.style.width = "auto" // アスペクト比を維持するように設定
    })
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

    // ドロップエリア
    enableDrop("preview")
    enableDrop("preview_left")
    enableDrop("preview_right")

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
        let func = new Function("cv", v)
        func(cv)
    })

    // リセットボタン
    let resetButton = document.getElementById("reset_button")
    resetButton.addEventListener("click", () => {
        editor.setValue('console.log("Hello, world")')
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

        let body = JSON.stringify(data)
        let request = { method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body }

        let promise = fetch('./api/register', request)

        var modal = document.getElementById('save_modal');
        modal.style.display = 'none';

        promise.then(() => { // 保存が完了したとき
            NotificationModal.show()
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
