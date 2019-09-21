import * as actions from '../actions/chat'

let id = 0

interface ChatState {
  channel: string
  messages: any[]
}

const defaultState: ChatState = {
  channel: '',
  messages: [],
}

const createNaughtyUserFilter = (user: any) => (message: any) => user.id !== message.user.id

export default (state: ChatState = defaultState, action: actions.ChatActions): ChatState => {
  switch (action.type) {
    case actions.CHAT_MESSAGE:
      id += 1

      return {
        ...state,
        messages: [
          ...state.messages,
          {
            ...action.payload,
            id,
          },
        ],
      }
    case actions.CHAT_CLEAR_USER_MESSAGES:
      return {
        ...state,
        messages: state.messages.filter(createNaughtyUserFilter(action.payload.user)),
      }
    case actions.CHAT_JOIN_CHANNEL:
      return action.payload.channel !== state.channel
        ? {
            channel: action.payload.channel,
            messages: [],
          }
        : state
    default:
      return state
  }
}
