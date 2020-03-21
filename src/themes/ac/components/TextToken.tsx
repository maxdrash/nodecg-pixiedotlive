import { FunctionComponent, h } from 'preact'
import { TextTokenProps } from '../../../components/Chat/MessageTokens/TextToken'
import Typed from '../../../components/TextEffects/Typed'

const TextToken: FunctionComponent<TextTokenProps> = ({ token }) => <Typed message={token.text} />

export default TextToken
