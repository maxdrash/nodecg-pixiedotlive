import twitchie from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { updateSocialAccounts } from '../actions/social'

interface SocialAccount {
  service: string
  username: string
}

export default (dispatch: Dispatch) => {
  const dispatchSocialAccountsUpdate = (newAccounts: SocialAccount[]) => dispatch(updateSocialAccounts(newAccounts))

  twitchie.social.on('change', dispatchSocialAccountsUpdate)
}
