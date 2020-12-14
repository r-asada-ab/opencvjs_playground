// 通知モーダル
export default class NotificationModal {

    public static setText(msg: string) {
        let messageElement = document.getElementById('notification_modal_message')
        messageElement.textContent = msg
    }

    public static hide() {
        let modal = document.getElementById('notification_modal')
        modal.style.display = 'none'
    }

    public static show() {
        let modal = document.getElementById('notification_modal')
        modal.className = "notification_modal"
        modal.style.display = 'block'
        modal.onclick = () => {
            modal.style.display = 'none'
        }
    }

    public static showError() {
        let modal = document.getElementById('notification_modal')
        modal.className = "notification_modal_error"
        modal.style.display = 'block'
        modal.onclick = () => {
            modal.style.display = 'none'
        }
    }
}