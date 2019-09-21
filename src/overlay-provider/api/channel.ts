import twitchie from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { updateChannelInfo } from '../actions/channel'

interface ChannelInfo {
  game: string
  status: string
}

export default (dispatch: Dispatch) => {
  const dispatchUpdateChannelInfo = ({ game, status }: ChannelInfo) => {
    const newChannelInfo = {
      game,
      status,
    }

    dispatch(updateChannelInfo(newChannelInfo))
  }

  twitchie.channel.info.on('change', dispatchUpdateChannelInfo)
}
