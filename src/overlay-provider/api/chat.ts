import twitchie from 'nodecg-twitchie-graphics'
import { Dispatch } from 'redux'

import { clearUserMessages, getMessage, joinChannel } from '../actions/chat'

export default (dispatch: Dispatch) => {
  twitchie.channel.id.on('change', (channel, oldChannel) => {
    if (!channel) {
      return
    }

    if (channel === oldChannel) {
      return
    }

    dispatch(joinChannel(channel))
  })

  twitchie.on('chat.action', message => {
    dispatch(getMessage(message))
  })

  twitchie.on('chat.message', message => {
    dispatch(getMessage(message))
  })

  twitchie.on('chat.ban', modAction => {
    dispatch(clearUserMessages(modAction))
  })

  twitchie.on('chat.timeout', modAction => {
    dispatch(clearUserMessages(modAction))
  })
}
