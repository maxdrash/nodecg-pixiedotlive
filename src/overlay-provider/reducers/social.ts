import { SocialAccounts } from '../../types'
import * as actions from '../actions/social'

export type SocialState = SocialAccounts

const defaultState: SocialState = []

export default (state: SocialState = defaultState, action: actions.SocialActions): SocialState => {
  switch (action.type) {
    case actions.SOCIAL_UPDATE:
      return action.payload ? action.payload : []
    default:
      return state
  }
}
