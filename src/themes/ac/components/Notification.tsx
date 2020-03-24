import { ChatNotificationMessage } from 'nodecg-twitchie-graphics'
import { Fragment, FunctionComponent, h } from 'preact'
import { TypedMessage } from '../../../components/TextEffects/Typed'
import DialogBox from './DialogBox'

interface NotificationProps {
  notification: ChatNotificationMessage
}

const Notification: FunctionComponent<NotificationProps> = ({ notification }) => {
  const notificationText =
    notification.topic === 'subscriber'
      ? `${notification.user} just subscribed! Wow! That's so many Nook Miles...`
      : `${notification.user} just followed! Welcome to Soar Bay!`

  return (
    <Fragment>
      <div className="c-chat-item c-chat-notification">
        <DialogBox>
          <TypedMessage message={notificationText} />
        </DialogBox>
      </div>

      <div className="c-chat-item c-chat-message">
        {notification.message && (
          <DialogBox name={notification.user}>
            <TypedMessage message={notification.message} />
          </DialogBox>
        )}
      </div>
    </Fragment>
  )
}

export { NotificationProps }
export default Notification
