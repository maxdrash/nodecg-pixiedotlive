import twitchie from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { queueNotification } from '../actions/notifications'

export default (dispatch: Dispatch) => {
  twitchie.on('user.subscription', subscriber => {
    dispatch(
      queueNotification({
        topic: 'subscriber',
        user: subscriber.name,
        message: subscriber.message,
        scale: subscriber.months,
      })
    )
  })
}
