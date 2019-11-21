import { ChatMessage } from 'nodecg-twitchie'
import { FunctionComponent, h } from 'preact'

import MessageTokens from '../../../components/Chat/MessageTokens'
import WiggleText from './WiggleText'

interface MessageProps {
  message: ChatMessage
}

const Message: FunctionComponent<MessageProps> = ({ message }) => (
  <div className="c-chat-message">
    <svg className="c-chat-message__curl" viewBox="0 0 34 13">
      <path
        fill-rule="evenodd"
        d="M33.000,1.000 C33.000,1.000 33.750,-1.250 30.000,1.000 C26.250,3.250 22.500,9.250 18.000,9.000 C13.500,8.750 -0.000,1.000 -0.000,1.000 C-0.000,1.000 10.500,13.000 17.000,13.000 C23.500,13.000 28.500,4.750 32.000,5.000 C35.500,5.250 33.000,1.000 33.000,1.000 Z"
      />
    </svg>

    <div className="c-chat-message__user">
      <WiggleText text={message.user.name} />
    </div>

    <div className="c-chat-message__message">
      <MessageTokens tokens={message.tokens} />
    </div>
  </div>
)

export { MessageProps }
export default Message
