import * as actions from '../actions/channel'

interface ChannelState {
  game: string
  status?: string
}

const defaultState: ChannelState = {
  game: 'Nothing...yet!',
  status: undefined,
}

export default (state: ChannelState = defaultState, action: actions.ChannelActions): ChannelState => {
  switch (action.type) {
    case actions.CHANNEL_UPDATE:
      return action.payload
    default:
      return state
  }
}
