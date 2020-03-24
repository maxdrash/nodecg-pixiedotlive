import { ChatMessage } from 'nodecg-twitchie'
import { FunctionComponent, h } from 'preact'

import MessageTokens from '../../../components/Chat/MessageTokens'
import Typed from '../../../components/TextEffects/Typed'
import DialogBox from './DialogBox'

interface MessageProps {
  message: ChatMessage
}

const Message: FunctionComponent<MessageProps> = ({ message }) => (
  <div className="c-chat-item c-chat-message">
    <DialogBox name={message.user.name} colour={message.user.color}>
      <MessageTokens WrapperComponent={Typed} tokens={message.tokens} />
    </DialogBox>
  </div>
)

export { MessageProps }
export default Message
