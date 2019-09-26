import twitchie, { TwitchieTimer } from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { updateTimer } from '../actions/timer'

export default (dispatch: Dispatch) => {
  const dispatchUpdateTimer = (timer: TwitchieTimer) => {
    dispatch(updateTimer(timer))
  }

  twitchie.timer.on('change', dispatchUpdateTimer)
}
