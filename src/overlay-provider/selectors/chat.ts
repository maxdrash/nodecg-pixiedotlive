const getChat = (state: any) => state.chat

const getChatChannel = (state: any) => getChat(state).channel

const getChatMessages = (state: any) => getChat(state).messages

export { getChat, getChatChannel, getChatMessages }
