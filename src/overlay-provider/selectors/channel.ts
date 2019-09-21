const getChannelInfo = (state: any) => state.channel

const getGame = (state: any) => getChannelInfo(state).game

const getStatus = (state: any) => getChannelInfo(state).status

export { getChannelInfo, getGame, getStatus }
