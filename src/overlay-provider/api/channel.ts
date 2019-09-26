import twitchie, { TwitchChannelInfo } from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { updateChannelInfo } from '../actions/channel'

export default (dispatch: Dispatch) => {
  const dispatchUpdateChannelInfo = ({ game, status }: TwitchChannelInfo) => {
    const newChannelInfo = {
      game,
      status,
    }

    dispatch(updateChannelInfo(newChannelInfo))
  }

  twitchie.channel.info.on('change', dispatchUpdateChannelInfo)
}
