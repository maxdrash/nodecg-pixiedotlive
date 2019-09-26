import twitchie, { TwitchChannelSubscriber } from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { queueNotification } from '../actions/notifications'

export default (dispatch: Dispatch) => {
  const dispatchSubscriberNotification = ({ username, months, message }: TwitchChannelSubscriber) => {
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
