import twitchie from 'nodecg-twitchie-graphics'
import { Dispatch } from 'redux'

import { clearUserMessages, getMessage, joinChannel } from '../actions/chat'
import { queueNotification } from '../actions/notifications'

import getUsername from '../utils/getUsername'

export default (dispatch: Dispatch) => {
  const dispatchClearUserMessage = ({ user }: { user: any }) => {
    dispatch(clearUserMessages(user))
  }

  const dispatchChatMessage = ({ user, message }: { user: any; message: any }) => {
    dispatch(getMessage(user, message))
  }

  const dispatchCheerNotification = ({ user, cheer }: { user: any; cheer: any }) => {
    dispatch(
      queueNotification({
        topic: 'cheer',
        user: getUsername(user),
        scale: cheer.bits,
      })
    )
  }

  const dispatchJoinChannel = ({ channel }: { channel: string }) => {
    dispatch(joinChannel(channel))
  }

  twitchie.on('chat.chat', dispatchChatMessage)

  twitchie.on('chat.cheer', ({ user, message, cheer }: any) => {
    dispatchChatMessage({ user, message })
    dispatchCheerNotification({ user, cheer })
  })

  twitchie.on('chat.join', ({ channel, self }: any) => {
    if (!self) {
      return
    }

    dispatchJoinChannel({ channel })
  })

  twitchie.on('chat.ban', dispatchClearUserMessage)
  twitchie.on('chat.timeout', dispatchClearUserMessage)
}
