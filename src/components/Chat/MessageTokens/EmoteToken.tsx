import { ChatEmoteMessageToken } from 'nodecg-twitchie'
import { Fragment, FunctionComponent, h } from 'preact'

interface EmoteTokenProps {
  token: ChatEmoteMessageToken
}

const EmoteToken: FunctionComponent<EmoteTokenProps> = ({ token }) => <Fragment>{token.name}</Fragment>

export default EmoteToken
