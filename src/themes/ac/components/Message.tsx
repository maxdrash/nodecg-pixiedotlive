import { ChatMessage } from 'nodecg-twitchie'
import { FunctionComponent, h } from 'preact'

import MessageTokens from '../../../components/Chat/MessageTokens'

interface MessageProps {
  message: ChatMessage
}

const Message: FunctionComponent<MessageProps> = ({ message }) => (
  <div className="c-chat-message c-dialog">
    <div className="c-chat-message__user c-dialog__nameplate c-nameplate">
      <div className="c-nameplate__bg">
        <svg className="c-nameplate__bg-end" xmlns="http://www.w3.org/2000/svg">
          <use href="#nameplate-left" />
        </svg>
        <svg className="c-nameplate__bg-middle" xmlns="http://www.w3.org/2000/svg">
          <use href="#nameplate-middle" />
        </svg>
        <svg className="c-nameplate__bg-end" xmlns="http://www.w3.org/2000/svg">
          <use href="#nameplate-right" />
        </svg>
      </div>

      {message.user.name}
    </div>

    <div className="c-chat-message__message c-dialog__message c-message">
      <div className="c-message__bg">
        <svg className="c-message__bg-end" xmlns="http://www.w3.org/2000/svg">
          <use href="#chat-top" />
        </svg>
        <svg className="c-message__bg-middle" xmlns="http://www.w3.org/2000/svg">
          <use href="#chat-middle" />
        </svg>
        <svg className="c-message__bg-end" xmlns="http://www.w3.org/2000/svg">
          <use href="#chat-bottom" />
        </svg>
      </div>

      <MessageTokens tokens={message.tokens} />
    </div>
  </div>
)

export { MessageProps }
export default Message
