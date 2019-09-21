const CHAT_MESSAGE = 'chat/MESSAGE'
const CHAT_JOIN_CHANNEL = 'chat/JOIN_CHANNEL'
const CHAT_CLEAR_USER_MESSAGES = 'chat/CLEAR_USER_MESSAGES'

interface GetMessageAction {
  type: typeof CHAT_MESSAGE
  payload: {
    user: string
    message: string
    topic?: string
  }
}

interface JoinChannelAction {
  type: typeof CHAT_JOIN_CHANNEL
  payload: {
    channel: string
  }
}

interface ClearChatMessagesAction {
  type: typeof CHAT_CLEAR_USER_MESSAGES
  payload: {
    user: string
  }
}

type ChatActions = GetMessageAction | JoinChannelAction | ClearChatMessagesAction

const getMessage = (user: any, message: any, topic?: any): ChatActions => ({
  type: CHAT_MESSAGE,
  payload: {
    user,
    message,
    topic,
  },
})

const joinChannel = (channel: any): ChatActions => ({
  type: CHAT_JOIN_CHANNEL,
  payload: {
    channel,
  },
})

const clearUserMessages = (user: any): ChatActions => ({
  type: CHAT_CLEAR_USER_MESSAGES,
  payload: {
    user,
  },
})

export {
  CHAT_MESSAGE,
  CHAT_JOIN_CHANNEL,
  CHAT_CLEAR_USER_MESSAGES,
  getMessage,
  joinChannel,
  clearUserMessages,
  ChatActions,
}
