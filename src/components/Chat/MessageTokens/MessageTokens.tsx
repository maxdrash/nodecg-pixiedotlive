import { ChatMessageToken } from 'nodecg-twitchie'
import { ComponentType, Fragment, FunctionComponent, h } from 'preact'

import CheerToken, { CheerTokenProps } from './CheerToken'
import EmoteToken, { EmoteTokenProps } from './EmoteToken'
import TextToken, { TextTokenProps } from './TextToken'

interface MessageTokensProps {
  EmoteComponent?: ComponentType<EmoteTokenProps>
  CheerComponent?: ComponentType<CheerTokenProps>
  TextComponent?: ComponentType<TextTokenProps>
  tokens: ChatMessageToken[]
}

const MessageTokens: FunctionComponent<MessageTokensProps> = ({
  EmoteComponent = EmoteToken,
  CheerComponent = CheerToken,
  TextComponent = TextToken,
  tokens,
}) => (
  <Fragment>
    {tokens.map(token => {
      if (token.type === 'emote') {
        return <EmoteComponent token={token} />
      }

      if (token.type === 'cheer') {
        return <CheerComponent token={token} />
      }

      return <TextComponent token={token} />
    })}
  </Fragment>
)

export { MessageTokensProps }
export default MessageTokens
