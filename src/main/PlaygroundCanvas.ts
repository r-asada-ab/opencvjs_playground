import { CanvasMode } from "./CanvasMode"

// プレイグランドキャンバス
export class PlaygroundCanvas {

    // ヘッダー(1画像)
    private singleHeader = document.getElementById("canvas_area_header_item_single")
    // ヘッダー(2画像)
    private doubleHeader = document.getElementById("canvas_area_header_item_double")
    // ヘッダー(ビデオ)
    private videoHeader = document.getElementById("canvas_area_header_item_video")
    // キャンバス(1画像)
    private singleCanvas = document.getElementById("canvas_area_single")
    // キャンバス(2画像)
    private doubleCanvas = document.getElementById("canvas_area_double")
    // キャンバス(ビデオ)
    private videoCanvas = document.getElementById("canvas_area_video")

    // コンストラクタ
    constructor() {
        this.initHeader()
        this.changeCanvas(CanvasMode.Single)
    }

    private initHeader() {
        let headerSingle = document.getElementById("canvas_area_header_item_single")
        headerSingle.addEventListener("mouseover", () => {
            headerSingle.style.cursor = "pointer"
        })
    
        headerSingle.addEventListener("click", () => {
            this.changeCanvas(CanvasMode.Single)
        })
    
        let headerDouble = document.getElementById("canvas_area_header_item_double")
        headerDouble.addEventListener("mouseover", () => {
            headerDouble.style.cursor = "pointer"
        })
    
        headerDouble.addEventListener("click", () => {
            this.changeCanvas(CanvasMode.Double)
        })
    
        let headerVideo = document.getElementById("canvas_area_header_item_video")
        headerVideo.addEventListener("mouseover", () => {
            headerVideo.style.cursor = "pointer"
        })
    
        headerVideo.addEventListener("click", () => {
            this.changeCanvas(CanvasMode.Video)
            let video = <HTMLVideoElement>document.getElementById("preview_video")
            let con = { video: true, audio: false }
            navigator.mediaDevices.getUserMedia(con).then( (stream) =>  {
                video.srcObject = stream
                video.play()
            }).catch(function(err) {
                console.log("An error occurred! " + err);
            });
        })
    }

    // キャンバスを変更する
    public changeCanvas(mode: CanvasMode) {
        switch (mode) {
            case CanvasMode.Single:
                this.singleHeader.className = "canvas_area_header_item_selected"
                this.doubleHeader.className = "canvas_area_header_item"
                this.videoHeader.className = "canvas_area_header_item"
                this.singleCanvas.hidden = false
                this.doubleCanvas.hidden = true
                this.videoCanvas.hidden = true
                break
            case CanvasMode.Double:
                this.singleHeader.className = "canvas_area_header_item"
                this.doubleHeader.className = "canvas_area_header_item_selected"
                this.videoHeader.className = "canvas_area_header_item"
                this.singleCanvas.hidden = true
                this.doubleCanvas.hidden = false
                this.videoCanvas.hidden = true
                break
            case CanvasMode.Video:
                this.singleHeader.className = "canvas_area_header_item"
                this.doubleHeader.className = "canvas_area_header_item"
                this.videoHeader.className = "canvas_area_header_item_selected"
                this.singleCanvas.hidden = true
                this.doubleCanvas.hidden = true
                this.videoCanvas.hidden = false
                break
        }
    }
}