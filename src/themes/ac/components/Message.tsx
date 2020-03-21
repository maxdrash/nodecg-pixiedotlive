import { ChatMessage } from 'nodecg-twitchie'
import { FunctionComponent, h } from 'preact'

import MessageTokens from '../../../components/Chat/MessageTokens'
import Typed from '../../../components/TextEffects/Typed'
import isColourLight from './utils/isColourLight'

interface MessageProps {
  message: ChatMessage
}

const useUserColours = (userColour?: string) => {
  if (!userColour) {
    return ['default', 'default']
  }

  const textColour = isColourLight(userColour) ? '#000000' : '#FFFFFF'

  return [userColour, textColour]
}

const Message: FunctionComponent<MessageProps> = ({ message }) => {
  const [bgColour, fgColour] = useUserColours(message.user.color)

  return (
    <div className="c-chat-message c-dialog">
      <div className="c-chat-message__user c-dialog__nameplate c-nameplate">
        <div className="c-nameplate__bg" style={{ color: bgColour }}>
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

        <span style={{ color: fgColour }}>{message.user.name}</span>
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

        <div>
          <MessageTokens WrapperComponent={Typed} tokens={message.tokens} />
        </div>
      </div>
    </div>
  )
}

export { MessageProps }
export default Message
