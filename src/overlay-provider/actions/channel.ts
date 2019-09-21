const CHANNEL_UPDATE = 'channel/UPDATE'

interface UpdateChannelInfoAction {
  type: typeof CHANNEL_UPDATE
  payload: {
    game: string
    status: string
  }
}

type ChannelActions = UpdateChannelInfoAction

const updateChannelInfo = ({ game, status }: { game: string; status: string }): ChannelActions => ({
  type: CHANNEL_UPDATE,
  payload: {
    game,
    status,
  },
})

export { CHANNEL_UPDATE, updateChannelInfo, ChannelActions }
