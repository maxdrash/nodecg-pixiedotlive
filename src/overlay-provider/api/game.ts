import test from 'nodecg-twitchie'
import twitchie, { createTwitchieStore } from 'nodecg-twitchie-graphics'

console.log(test, twitchie, createTwitchieStore)

import { Dispatch } from 'redux'
import { updateGameInfo } from '../actions/game'

export default (dispatch: Dispatch) => {
  twitchie.game.info.on('change', game => {
    dispatch(updateGameInfo(game))
  })
}
