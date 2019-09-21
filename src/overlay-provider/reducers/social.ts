import * as actions from '../actions/social'

interface SocialAccount {
  service: string
  username: string
}

type SocialState = SocialAccount[]

const defaultState: SocialState = []

export default (state: SocialState = defaultState, action: actions.SocialActions): SocialState => {
  switch (action.type) {
    case actions.SOCIAL_UPDATE:
      return action.payload ? [...action.payload] : []
    default:
      return state
  }
}
