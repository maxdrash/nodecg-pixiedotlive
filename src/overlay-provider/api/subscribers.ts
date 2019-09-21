import twitchie from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { queueNotification } from '../actions/notifications'

interface Notification {
  username: string
  months: string
  message: string
}

export default (dispatch: Dispatch) => {
  const dispatchSubscriberNotification = ({ username, months, message }: Notification) => {
    dispatch(
      queueNotification({
        message,
        topic: 'subscriber',
        user: username,
        scale: months,
      })
    )
  }

  twitchie.on('channel.subscription', dispatchSubscriberNotification)
}
