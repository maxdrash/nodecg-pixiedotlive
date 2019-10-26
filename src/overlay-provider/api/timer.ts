import twitchie from 'nodecg-twitchie-graphics'
import { Dispatch } from 'redux'

import { clearTimer, updateTimer } from '../actions/timer'

export default (dispatch: Dispatch) => {
  twitchie.graphics.timer.on('change', newTimer => {
    if (!newTimer) {
      dispatch(clearTimer())
      return
    }

    dispatch(updateTimer(newTimer))
  })
}
