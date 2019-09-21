import { Dispatch } from 'redux'

import brb from './brb'
import channel from './channel'
import chat from './chat'
import followers from './followers'
import social from './social'
import subscribers from './subscribers'
import timer from './timer'

const bindDispatchToAPIEvents = ({ dispatch }: { dispatch: Dispatch }) => {
  channel(dispatch)
  social(dispatch)
  brb(dispatch)
  chat(dispatch)
  followers(dispatch)
  subscribers(dispatch)
  timer(dispatch)
}

export default bindDispatchToAPIEvents
