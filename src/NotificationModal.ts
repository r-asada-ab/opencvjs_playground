// 通知モーダル
export default class NotificationModal {

    public static setText(msg: string) {
        let messageElement = document.getElementById('notification_modal_message')
        messageElement.textContent = msg
    }

    public static show() {
        let modal = document.getElementById('notification_modal')
        modal.style.display = 'block'
        modal.onclick = () => {
            modal.style.display = 'none'
        }
    }
}