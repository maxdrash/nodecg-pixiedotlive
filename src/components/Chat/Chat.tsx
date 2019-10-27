import { ChatMessageTypeWithNotifications, getChatMessages } from 'nodecg-twitchie-graphics'
import { ComponentType, createElement, FunctionComponent, h } from 'preact'
import { useRef } from 'preact/hooks'
import { useSelector } from 'react-redux'

import Message, { MessageProps } from './Message'
import Notification, { NotificationProps } from './Notification'

interface ChatProps {
  messageComponent?: ComponentType<MessageProps>
  notificationComponent?: ComponentType<NotificationProps>
}

const Chat: FunctionComponent<ChatProps> = ({ messageComponent = Message, notificationComponent = Notification }) => {
  const chatRef = useRef()
  const messagesWrapperRef = useRef()

  const messages = useSelector(getChatMessages)

  return (
    <div ref={chatRef} className="c-chat">
      <div ref={messagesWrapperRef} className="c-chat__wrapper">
        {messages.map(message => {
          if (message.type === ChatMessageTypeWithNotifications.NOTIFICATION) {
            return createElement(notificationComponent, { notification: message })
          }

          return createElement(messageComponent, { message })
        })}
      </div>
    </div>
  )
}

export default Chat
