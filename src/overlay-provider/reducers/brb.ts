import * as actions from '../actions/brb'

interface BRBState {
  away: boolean
  message?: string
}

const defaultState: BRBState = {
  away: false,
  message: undefined,
}

export default (state: BRBState = defaultState, action: actions.BRBActions): BRBState => {
  switch (action.type) {
    case actions.BRB_UPDATE:
      return {
        away: !!action.payload.away,
        message: action.payload.message,
      }
    default:
      return state
  }
}
