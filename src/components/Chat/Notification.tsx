import { ChatNotificationMessage } from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'

interface NotificationProps {
  notification: ChatNotificationMessage
}

const Notification: FunctionComponent<NotificationProps> = ({ notification }) => (
  <div className="c-chat-message">
    <div className="c-chat-message__user">{notification.user}</div>

    {notification.topic === 'follower' && <div className="c-chat-message__user">just followed!</div>}

    {notification.topic === 'subscriber' && <div className="c-chat-message__user">just subscribed!</div>}

    <div className="c-chat-message__message">{notification.message}</div>
  </div>
)

export { NotificationProps }
export default Notification
