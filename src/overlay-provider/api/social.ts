import twitchie, { TwitchieSocialAccounts } from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { updateSocialAccounts } from '../actions/social'

export default (dispatch: Dispatch) => {
  const dispatchSocialAccountsUpdate = (newAccounts: TwitchieSocialAccounts) => {
    dispatch(updateSocialAccounts(newAccounts))
  }

  twitchie.social.on('change', dispatchSocialAccountsUpdate)
}
