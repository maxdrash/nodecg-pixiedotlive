import twitchie from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { updateBRB } from '../actions/brb'

interface Message {
  away: boolean
  message: string
}

export default (dispatch: Dispatch) => {
  const dispatchUpdateBRB = ({ away = false, message }: Message) => {
    dispatch(updateBRB(away, message))
  }

  twitchie.brb.on('change', dispatchUpdateBRB)
}
