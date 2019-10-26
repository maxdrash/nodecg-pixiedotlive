import twitchie from 'nodecg-twitchie-graphics'

import { Dispatch } from 'redux'
import { updateSocialAccounts } from '../actions/social'

export default (dispatch: Dispatch) => {
  twitchie.graphics.social.on('change', newAccounts => {
    dispatch(updateSocialAccounts(newAccounts || []))
  })
}
