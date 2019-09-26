import twitchie, { TwitchieBRBStatus } from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { updateBRB } from '../actions/brb'

export default (dispatch: Dispatch) => {
  const dispatchUpdateBRB = ({ away = false, message }: TwitchieBRBStatus) => {
    dispatch(updateBRB(away, message))
  }

  twitchie.brb.on('change', dispatchUpdateBRB)
}
