import twitchie from 'nodecg-twitchie-graphics'
import { Dispatch } from 'redux'

import { queueNotification } from '../actions/notifications'

import getUsername from '../utils/getUsername'

interface User {
  name: string
  display_name?: string
}

interface FollowerNotification {
  user: User
}

export default (dispatch: Dispatch) => {
  const dispatchFollowerNotification = ({ user }: FollowerNotification) => {
    dispatch(
      queueNotification({
        topic: 'follower',
        user: getUsername(user),
      })
    )
  }

  twitchie.on('channel.follower', dispatchFollowerNotification)
}
