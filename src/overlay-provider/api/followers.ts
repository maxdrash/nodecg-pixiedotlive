import twitchie, { TwitchChannelFollower } from 'nodecg-twitchie-graphics'
import { Dispatch } from 'redux'

import { queueNotification } from '../actions/notifications'

import getUsername from '../utils/getUsername'

export default (dispatch: Dispatch) => {
  const dispatchFollowerNotification = ({ user }: TwitchChannelFollower) => {
    dispatch(
      queueNotification({
        topic: 'follower',
        user: getUsername(user),
      })
    )
  }

  twitchie.on('channel.follower', dispatchFollowerNotification)
}
